import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGrid2Component } from './product-grid2.component';

describe('ProductGrid2Component', () => {
  let component: ProductGrid2Component;
  let fixture: ComponentFixture<ProductGrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGrid2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
