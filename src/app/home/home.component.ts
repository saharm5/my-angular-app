// C:\Users\Sanay\my-angular-app\src\app\home\home.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>صفحه اصلی</h2>
    <p>به اپلیکیشن خوش آمدید!</p>
  `,
  styles: [`
    h2 { color: darkblue; }
    p { font-size: 1.1rem; }
  `]
})
export class HomeComponent { }
