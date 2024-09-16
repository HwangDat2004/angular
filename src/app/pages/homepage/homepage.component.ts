import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [];
  productSevice = inject(ProductService);
  toast: any;

  ngOnInit() {
    this.productSevice.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        console.log(e);
        this.toast.error('Error: ' + e.message);
      }
    });
 }

} 