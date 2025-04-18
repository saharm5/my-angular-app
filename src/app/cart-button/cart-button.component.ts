// C: \Users\Sanay\my - angular - app\src\app\cart - button\cart - button.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCart } from '../icons/add-to-cart.svg';
import { plus } from '../icons/plus.svg';
import { Minus } from '../icons/minus.svg';
import { trash } from '../icons/trash.svg';


@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [CommonModule, AddToCart, plus, Minus, trash],
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent {
  // @Input() quantity: number = 0;
  // @Input() addcard: string = 'افزودن به سبد';
  // @Output() onAdd = new EventEmitter<void>();
  // @Output() onReduce = new EventEmitter<void>();
  @Input() quantity: number = 0; // ورودی quantity
  @Input() addcard: string = ''; // ورودی addcard

  @Output() onAdd: EventEmitter<void> = new EventEmitter();
  @Output() onReduce: EventEmitter<void> = new EventEmitter();

  handleAdd() {
    this.onAdd.emit();
  }

  handleReduce() {
    this.onReduce.emit();
  }
}
