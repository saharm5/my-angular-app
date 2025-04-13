// C: \Users\Sanay\my - angular - app\src\app\register\register.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
})
export class RegisterComponent {
  phone_number = '';
  isSubmitting = false;
  error = '';

  constructor(private apiService: ApiService, private router: Router) { }

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.phone_number.trim()) return;

    this.isSubmitting = true;
    const formData = {
      phone_number: this.phone_number,
    };

    this.apiService.loginOrRegister(formData, false).subscribe({
      next: (result: any) => {
        if (result.isregister === 1) {
          alert("لطفا ثبت نام کنید");
          console.log("نتیجه ثبت نام یا ورود:", result);
          this.router.navigate(['/signup']);
        } else if (result.isregister === 2) {
          alert("لطفا وارد شوید");
          this.router.navigate(['/login']);
        }
        this.phone_number = '';
        this.error = '';
      },
      error: () => {
        this.error = 'خطا در ارسال اطلاعات';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
