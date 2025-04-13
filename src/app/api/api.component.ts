import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const BASE_URL = "http://localhost:8081/";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public sendPostRequest(endpoint: string, formData: any, withAuth: boolean = false): Observable<any> {
    const url = `${BASE_URL}${endpoint}`;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (withAuth) {
      const token = localStorage.getItem('token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return this.http.post(url, formData, { headers }).pipe(
      map(responseText => {
        return typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
      }),
      catchError(err => {
        console.error(`Error in POST ${endpoint}:`, err);
        return throwError(() => err);
      })
    );
  }


  public fetchProducts(url: string, withAuth: boolean = true): Observable<any[]> {
    const token = localStorage.getItem("token") || "";
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      ...(withAuth && token ? { Authorization: `Bearer ${token}` } : {}),
    });

    return this.http.get<any[]>(`${BASE_URL}${url}`, { headers }).pipe(
      catchError(err => {
        console.error("خطا در دریافت محصولات:", err);
        return throwError(() => err);
      })
    );
  }

  public verifyOtp(formData: any, withAuth: boolean = false): Observable<any> {
    return this.sendPostRequest('api/auth/verify-otp/', formData, withAuth);
  }

  public loginOrRegister(formData: any, withAuth: boolean = false): Observable<any> {
    return this.sendPostRequest('api/auth/login-or-register/', formData, withAuth);
  }

  public loginWithPassword(formData: any, withAuth: boolean = false): Observable<any> {
    return this.sendPostRequest('api/auth/login-with-password/', formData, withAuth);
  }

  private async refreshAccessToken(): Promise<string | null> {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      console.error("Refresh Token موجود نیست");
      return null;
    }

    try {
      const response = await fetch(`${BASE_URL}token/refresh/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!response.ok) {
        console.error("توکن رفرش معتبر نیست یا مشکل دیگری پیش آمده");
        return null;
      }

      const data = await response.json();
      const newAccessToken = data.access;
      localStorage.setItem("token", newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error("خطا در رفرش توکن:", error);
      return null;
    }
  }
}
