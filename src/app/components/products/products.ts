import { Iproduct } from '../../interfaces/iproduct';
import { Product } from './../../services/products';
import { Component, inject, OnInit } from '@angular/core';
import { Recommendation } from '../recommendation/recommendation';

@Component({
  selector: 'app-products',
  imports: [Recommendation],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Iproduct[] = [];

  private readonly product = inject(Product);

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.product.getProductsApi().subscribe({
      next: (ser) => {
        console.log(ser);
        this.products = ser;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
