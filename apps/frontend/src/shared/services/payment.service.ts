import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type PaymentProcessResult = {
  success: boolean;
  coinsAdded?: number;
};

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly http = inject(HttpClient);

  processPaymentSuccess(sessionId: string): Observable<PaymentProcessResult> {
    return this.http.get<PaymentProcessResult>(
      `http://localhost:3000/api/stripe/payment-success?session_id=${sessionId}`,
    );
  }
}
