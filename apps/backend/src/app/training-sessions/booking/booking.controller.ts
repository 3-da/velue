import { Body, Controller, Delete, Param, Post, UseGuards } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { BookingDto } from './dto/booking-response.dto';

@Controller()
@UseGuards(JwtAuthGuard)
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('booking')
  async create(@Body() createBookingDto: CreateBookingDto): Promise<BookingDto> {
    return await this.bookingService.createBooking(createBookingDto);
  }

  @Delete('booking/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bookingService.removeBooking(id);
  }
}