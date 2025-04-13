// C: \Users\Sanay\my - angular - app\src\app\app.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  phone_numbers: string[] = [];
  passwords: string[] = [];
  FormData: any[] = [];

  onFormSubmitted(data: { phone_number: string; password: string }) {
    this.phone_numbers.push(data.phone_number);
    this.passwords.push(data.password);
    this.FormData.push(data);

  }
}
