import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../../features/models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UbidProfileService {
  private apiUrl = 'https://localhost:7116/api/profile/1'; // base url

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  updateUserProfile(profile: UserProfile): Observable<any> {
    return this.http.put(`${this.apiUrl}`, profile);
  }

  resetToDefaults(): Observable<UserProfile> {
    return this.http.post<UserProfile>(`${this.apiUrl}/reset`, {});
  }
}
