import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { BookingResponse, CreateBookingRequest } from '@velue/shared-models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly baseUrl = `${environment.apiUrl}/booking`;
  private readonly http = inject(HttpClient);

  createBooking(trainingSessionId: string, userId: string): Observable<BookingResponse> {
    const payload: CreateBookingRequest = { trainingSessionId, userId };
    return this.http
      .post<BookingResponse>(this.baseUrl, payload, {
        withCredentials: true,
      })
      .pipe(
        catchError(error => {
          console.error('Booking creation failed:', error);
          return throwError(() => error);
        }),
      );
  }

  cancelBooking(bookingId: string): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${bookingId}`, {
        withCredentials: true,
      })
      .pipe(
        catchError(error => {
          console.error('Booking cancellation failed:', error);
          return throwError(() => error);
        }),
      );
  }
}
