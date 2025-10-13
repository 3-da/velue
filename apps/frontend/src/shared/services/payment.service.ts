import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
      `${environment.apiUrl}/stripe/payment-success?session_id=${sessionId}`,
    );
  }
}
