import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export type EmailData = {
  to: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  sentAt: string;
};

type EmailHistoryResponse = {
  count: number;
  emails: EmailData[];
  message: string;
};

@Injectable({
  providedIn: 'root',
})
export class EmailHistoryService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/dev`;

  getEmails(): Observable<EmailData[]> {
    return this.http
      .get<EmailHistoryResponse>(`${this.baseUrl}/emails`)
      .pipe(map(response => response.emails));
  }

  deleteAllEmails(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/emails`);
  }
}
