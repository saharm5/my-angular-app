// C:\Users\Sanay\my-angular-app\src\app\home\home.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGrid2Component } from "../product-grid2/product-grid2.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductGrid2Component],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
