// C:\Users\Sanay\my-angular-app\src\app\api\api.component.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const BASE_URL = "http://localhost:8081/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private sendPostRequest(endpoint: string, formData: any, withAuth: boolean = false): Observable<any> {
    const url = `${BASE_URL}${endpoint}`;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (withAuth) {
      const token = localStorage.getItem('token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return this.http.post(url, JSON.stringify(formData), { headers, responseType: 'text' }).pipe(
      map(responseText => {
        try {
          return JSON.parse(responseText);
        } catch {
          return { text: responseText };
        }
      }),
      catchError(err => {
        console.error(`Error in POST ${endpoint}:`, err);
        return throwError(() => err);
      })
    );
  }

  verifyOtp(formData: any, withAuth: boolean = false): Observable<any> {
    return this.sendPostRequest('/api/auth/verify-otp/', formData, withAuth);
  }
  loginOrRegister(formData: any, withAuth: boolean = false): Observable<any> {
    return this.sendPostRequest('/api/auth/login-or-register/', formData, withAuth);
  }

  loginWithPassword(formData: any, withAuth: boolean = false): Observable<any> {
    return this.sendPostRequest('/api/auth/login-with-password/', formData, withAuth);
  }
}
