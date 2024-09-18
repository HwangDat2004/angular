import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './deatail.component.html',
  styleUrl: './deatail.component.css',
})
export class ProductDetailComponent {
  product: Product | null = null;
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    // params =  useParam()
    this.route.params.subscribe((params) => {
      this.productService.getDeatail(params['id']).subscribe({
        next: (data) => (this.product = data),
        error: () => {
          alert('Error');
        },
      });
    });
  }
}