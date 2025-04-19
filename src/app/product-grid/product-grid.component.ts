// product-grid.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartButtonComponent } from "../cart-button/cart-button.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  Discount: number;
  addcard: string | null;
  quantity: number;
  id: number;
  imageUrl: string | null;
  title: string;
  final_price: number;
  main_price: number;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
  imports: [CommonModule, RouterModule, CartButtonComponent]
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
  @Input() carts: { id: number; quantity: number }[] = [];
  @Output() addition = new EventEmitter<number>();
  @Output() reduce = new EventEmitter<number>();

  getQuantity(productId: number): number {
    const item = this.carts.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  }
}
