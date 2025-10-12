import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainingSessionResponse, TrainingSessionWithDetails, UpdateTrainingSessionStatus } from '@velue/shared-models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainingSessionsService {
  private readonly baseUrl = `${environment.apiUrl}/training-sessions`;
  private readonly http = inject(HttpClient);

  getTrainingSession(id: string): Observable<TrainingSessionResponse> {
    return this.http.get<TrainingSessionResponse>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  getUpcomingTrainingSessions(): Observable<TrainingSessionWithDetails[]> {
    return this.http.get<TrainingSessionWithDetails[]>(`${this.baseUrl}/upcoming`, { withCredentials: true });
  }

  updateTrainingSessionStatus(id: string, status: UpdateTrainingSessionStatus): Observable<TrainingSessionResponse> {
    return this.http.patch<TrainingSessionResponse>(`${this.baseUrl}/${id}/status`, status, { withCredentials: true });
  }
}
