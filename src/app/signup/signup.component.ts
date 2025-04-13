// C:\Users\Sanay\my-angular-app\src\app\signup\signup.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../api/api.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  password = '';
  phone_number = '';
  otp = '';
  isSubmitting = false;
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.otp.trim() || !this.phone_number.trim() || !this.password.trim()) return;

    this.isSubmitting = true;
    const formData = {
      phone_number: this.phone_number,
      otp: this.otp,
      password: this.password
    };

    this.authService.verifyOtp(formData, false).subscribe({
      next: (result) => {
        if (result?.access && result?.refresh) {
          localStorage.setItem('token', result.access);
          localStorage.setItem('refresh_token', result.refresh);
          alert("خوش آمدید");
          this.router.navigate(['/']);
        }
        this.phone_number = '';
        this.otp = '';
        this.password = '';
        this.error = '';
      },
      error: () => {
        this.error = 'کد احراز هویت اشتباه است';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
