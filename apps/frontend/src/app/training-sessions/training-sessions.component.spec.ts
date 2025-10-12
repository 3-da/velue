import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainingSessionsComponent } from './training-sessions.component';
import { TrainingSessionsService } from '../../shared/services/training-sessions.service';
import { BookingService } from '../../shared/services/booking.service';
import { UserService } from '../../shared/services/user.service';
import { PaymentService } from '../../shared/services/payment.service';
import { AuthService } from '../../shared/services/auth.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { BookingResponse, TrainingSessionWithDetails, UserWithAllRoles } from '@velue/shared-models';
import { HttpErrorResponse } from '@angular/common/http';
import { beforeEach, describe, expect, it, vi } from 'vitest';

type MockedTrainingSessionsService = {
  getUpcomingTrainingSessions: ReturnType<typeof vi.fn>;
};

type MockedBookingService = {
  createBooking: ReturnType<typeof vi.fn>;
  cancelBooking: ReturnType<typeof vi.fn>;
};

type MockedUserService = {
  getCurrentUser: ReturnType<typeof vi.fn>;
  getCurrentUserSignal: ReturnType<typeof vi.fn>;
};

type MockedAuthService = {
  isAuthenticated: ReturnType<typeof vi.fn>;
};

type MockedMessageService = {
  add: ReturnType<typeof vi.fn>;
};

describe('TrainingSessionsComponent', () => {
  let component: TrainingSessionsComponent;
  let fixture: ComponentFixture<TrainingSessionsComponent>;
  let trainingSessionsService: MockedTrainingSessionsService;
  let bookingService: MockedBookingService;
  let userService: MockedUserService;
  let authService: MockedAuthService;
  let messageService: MockedMessageService;

  const mockUser: UserWithAllRoles = {
    id: 'user-123',
    email: 'test@example.com',
    password: 'hashed-password',
    firstName: 'Test',
    lastName: 'User',
    birthDate: new Date('1990-01-01'),
    phone: null,
    address: null,
    role: 'CUSTOMER',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    lastLogin: new Date(),
    passwordLastChanged: new Date(),
    passwordResetToken: null,
    passwordResetExpiry: null,
    customer: {
      id: 'customer-123',
      userId: 'user-123',
      coins: 10,
      preferredTrainingTypes: ['SPINNING_BEGINNER'],
      emergencyContact: null,
    },
    trainer: null,
    admin: null,
  };

  const mockSessions: TrainingSessionWithDetails[] = [
    {
      id: 'session-1',
      trainerId: 'trainer-1',
      trainingType: 'SPINNING_BEGINNER',
      date: new Date('2025-12-01'),
      startTime: 'SLOT_0900',
      durationMinutes: 60,
      maxParticipants: 10,
      coinsRequired: 5,
      status: 'SCHEDULED',
      qrCode: 'test-qr-code',
      createdAt: new Date(),
      updatedAt: new Date(),
      trainer: {
        user: {
          firstName: 'John',
          lastName: 'Trainer',
        },
      },
      bookings: [
        {
          id: 'booking-1',
          userId: 'user-123',
          status: 'CONFIRMED',
        },
      ],
    },
  ];

  beforeEach(async () => {
    const trainingSessionsServiceMock = {
      getUpcomingTrainingSessions: vi.fn(),
    };
    const bookingServiceMock = {
      createBooking: vi.fn(),
      cancelBooking: vi.fn(),
    };
    const userServiceMock = {
      getCurrentUser: vi.fn(),
      getCurrentUserSignal: vi.fn(),
    };
    const authServiceMock = {
      isAuthenticated: vi.fn(),
    };
    const messageServiceMock = {
      add: vi.fn(),
    };
    const paymentServiceMock = {
      processPaymentSuccess: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [TrainingSessionsComponent],
      providers: [
        { provide: TrainingSessionsService, useValue: trainingSessionsServiceMock },
        { provide: BookingService, useValue: bookingServiceMock },
        { provide: UserService, useValue: userServiceMock },
        { provide: AuthService, useValue: authServiceMock },
        { provide: MessageService, useValue: messageServiceMock },
        { provide: PaymentService, useValue: paymentServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
          },
        },
      ],
    }).compileComponents();

    trainingSessionsService = TestBed.inject(TrainingSessionsService) as unknown as MockedTrainingSessionsService;
    bookingService = TestBed.inject(BookingService) as unknown as MockedBookingService;
    userService = TestBed.inject(UserService) as unknown as MockedUserService;
    authService = TestBed.inject(AuthService) as unknown as MockedAuthService;
    messageService = TestBed.inject(MessageService) as unknown as MockedMessageService;

    trainingSessionsService.getUpcomingTrainingSessions.mockReturnValue(of(mockSessions));
    userService.getCurrentUser.mockReturnValue(of(mockUser));
    userService.getCurrentUserSignal.mockReturnValue(mockUser);

    fixture = TestBed.createComponent(TrainingSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Session display logic', () => {
    it('should group sessions by date correctly', () => {
      const grouped = component['groupedSessionsByDate']();
      const dateKey = new Date('2025-12-01').toDateString();

      expect(grouped[dateKey]).toBeDefined();
      expect(grouped[dateKey].length).toBe(1);
      expect(grouped[dateKey][0].id).toBe('session-1');
    });

    it('should determine session full status correctly', () => {
      const fullSession: TrainingSessionWithDetails = {
        ...mockSessions[0],
        maxParticipants: 1,
        bookings: [mockSessions[0].bookings[0]],
      };

      expect(component['isSessionFull'](fullSession)).toBe(true);
    });

    it('should detect if user has booked session', () => {
      expect(component['hasUserBookedSession'](mockSessions[0])).toBe(true);
    });

    it('should return correct availability status', () => {
      const halfFullSession: TrainingSessionWithDetails = {
        ...mockSessions[0],
        maxParticipants: 10,
        bookings: Array(5).fill(mockSessions[0].bookings[0]),
      };

      expect(component['getAvailabilityStatus'](halfFullSession)).toBe('success');

      const mostlyFullSession: TrainingSessionWithDetails = {
        ...mockSessions[0],
        maxParticipants: 10,
        bookings: Array(9).fill(mockSessions[0].bookings[0]),
      };

      expect(component['getAvailabilityStatus'](mostlyFullSession)).toBe('danger');
    });
  });

  describe('bookSession', () => {
    beforeEach(() => {
      authService.isAuthenticated.mockReturnValue(true);
    });

    it('should create booking successfully', async () => {
      const mockBookingResponse: BookingResponse = {
        id: 'new-booking',
        userId: 'user-123',
        trainingSessionId: 'session-1',
        status: 'CONFIRMED',
        coinsUsed: 5,
        bookedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      bookingService.createBooking.mockReturnValue(of(mockBookingResponse));

      await component['bookSession']('session-1');

      expect(bookingService.createBooking).toHaveBeenCalledWith('session-1', 'user-123');
      expect(messageService.add).toHaveBeenCalledWith({
        severity: 'success',
        summary: 'Booking Confirmed',
        detail: 'Your training session has been booked successfully!',
      });
    });

    it('should show error when user is not authenticated', async () => {
      authService.isAuthenticated.mockReturnValue(false);

      await component['bookSession']('session-1');

      expect(bookingService.createBooking).not.toHaveBeenCalled();
      expect(messageService.add).toHaveBeenCalledWith({
        severity: 'warn',
        summary: 'Authentication Required',
        detail: 'Please sign in to book a session.',
      });
    });

    it('should handle booking error with custom message', async () => {
      const errorResponse = new HttpErrorResponse({
        error: { message: 'Insufficient coins' },
        status: 400,
      });

      bookingService.createBooking.mockReturnValue(throwError(() => errorResponse));

      await component['bookSession']('session-1');

      expect(messageService.add).toHaveBeenCalledWith({
        severity: 'error',
        summary: 'Booking Failed',
        detail: 'Insufficient coins',
      });
    });
  });

  describe('cancelBooking', () => {
    it('should cancel booking successfully and refund coins', async () => {
      bookingService.cancelBooking.mockReturnValue(of(undefined));

      await component['cancelBooking'](mockSessions[0]);

      expect(bookingService.cancelBooking).toHaveBeenCalledWith('booking-1');
      expect(messageService.add).toHaveBeenCalledWith({
        severity: 'success',
        summary: 'Booking Cancelled',
        detail: 'Your booking has been cancelled successfully!',
      });
    });

    it('should show error when no booking found', async () => {
      const sessionWithoutBooking: TrainingSessionWithDetails = {
        ...mockSessions[0],
        bookings: [],
      };

      await component['cancelBooking'](sessionWithoutBooking);

      expect(bookingService.cancelBooking).not.toHaveBeenCalled();
      expect(messageService.add).toHaveBeenCalledWith({
        severity: 'error',
        summary: 'Cancellation Failed',
        detail: 'No booking found for this session.',
      });
    });

    it('should handle cancellation error with 24h rule message', async () => {
      const errorResponse = new HttpErrorResponse({
        error: { message: 'Cancellation must be made at least 24 hours in advance' },
        status: 400,
      });

      bookingService.cancelBooking.mockReturnValue(throwError(() => errorResponse));

      await component['cancelBooking'](mockSessions[0]);

      expect(messageService.add).toHaveBeenCalledWith({
        severity: 'error',
        summary: 'Cancellation Failed',
        detail: 'Cancellation must be made at least 24 hours in advance',
      });
    });
  });
});
