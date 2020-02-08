import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../services/product';
import { ProductService } from '../../../services/product.service';
import { LocalStorageService } from '../../../services/local-storage.service';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;
  paramCategory;
  productAddedTocart = [];
  addToCartMsg;
  cartItemCount;
  isAddToCart: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, private localStorageService: LocalStorageService) {
  }
  ngOnInit() {
    this.paramCategory = localStorage.getItem("nalanda_category");
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => {
        this.product = product;
        this.ngOnInit();
      },
      error: err => this.errorMessage = err
    });
  }
  addToCart(product) {
    this.addToCartMsg = "";
    this.productService.productAddedTocart = this.productService.getProductFromCart();
    this.productService.productAddedTocart.forEach((data,index) => {
      if (data.productId === product.productId) {
        data.count += product.count;        
        return;
      }
    });
    this.productService.productAddedTocart.push(product);
    this.productService.addProductToCart(this.productService.productAddedTocart);
    this.cartItemCount = this.productService.productAddedTocart.length;
    this.productService.updateCartCount(this.cartItemCount);
  }

  onBack(): void {
    this.router.navigate(['/category/' + this.paramCategory]);
  }
}
