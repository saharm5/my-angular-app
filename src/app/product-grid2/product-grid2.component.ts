// product-grid2.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.component';
import { Router } from '@angular/router';
import { ProductGridComponent } from "../product-grid/product-grid.component";
import { firstValueFrom } from 'rxjs';

interface Product {
  Discount: number;
  quantity: number;
  id: number;
  product_name: string;
  final_price: number; 
  main_price: number;
  description: string;
  rating: number;
  productImageSrc: { productImageSrc: string }[];
}

@Component({
  selector: 'app-product-grid2',
  templateUrl: './product-grid2.component.html',
  imports: [ProductGridComponent],
})
export class ProductGrid2Component implements OnInit {
  products: any[] = [];
  carts: { id: number; quantity: number }[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  async ngOnInit() {
    try {
      const data = await firstValueFrom(this.apiService.fetchProducts('api/data/'));
      this.products = data.map((product: Product) => ({
        Discount: product.Discount,
        id: product.id,
        title: product.product_name,
        final_price: product.final_price,
        quantity: product.quantity,
        main_price: product.main_price,
        addcard: null,
        imageUrl: product.productImageSrc[0]?.productImageSrc || '',
      }));
      this.carts = this.products.map((p) => ({ id: p.id, quantity: p.quantity }));
    } catch (err) {
      console.error('Failed to fetch products');
    }
  }

  async increase(id: number) {
    this.carts = this.carts.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    try {
      await this.apiService.sendPostRequest('AddCart/cart/', { id, operation: 'add' }, true).toPromise();
    } catch {
      alert('لطفا وارد شوید');
    }
  }

  async decrease(id: number) {
    this.carts = this.carts.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );
    try {
      await this.apiService.sendPostRequest('AddCart/cart/', { id, operation: 'remove' }, true).toPromise();
    } catch {
      alert('لطفا وارد شوید');
    }
  }
}
