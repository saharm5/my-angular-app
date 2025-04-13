import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password = '';
  phone_number = '';
  isSubmitting = false;
  error = '';

  constructor(private apiService: ApiService, private router: Router) { }

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.phone_number.trim() || !this.password.trim()) return;

    this.isSubmitting = true;
    const formData = {
      phone_number: this.phone_number,
      password: this.password
    };

    this.apiService.loginWithPassword(formData, false).subscribe({
      next: (result: any) => {
        if (result?.access && result?.refresh) {
          localStorage.setItem('token', result.access);
          localStorage.setItem('refresh_token', result.refresh);
          alert("خوش آمدید");
          this.router.navigate(['/']);
        }

        this.phone_number = '';
        this.password = '';
        this.error = '';
      },
      error: () => {
        this.error = 'شماره تلفن یا رمز عبور نادرست است!';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
