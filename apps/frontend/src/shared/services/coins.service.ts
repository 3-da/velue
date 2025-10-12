import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoinsPackageResponse } from '@velue/shared-models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  private readonly baseUrl = `${environment.apiUrl}/coins`;
  private http = inject(HttpClient);

  getAllCoinPackages(): Observable<CoinsPackageResponse[]> {
    return this.http.get<CoinsPackageResponse[]>(this.baseUrl, { withCredentials: true });
  }

  createStripeCheckoutSession(priceId: string, userId: string): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(`${environment.apiUrl}/stripe/create-checkout-session`, {
      priceId,
      userId
    }, { withCredentials: true });
  }
}
