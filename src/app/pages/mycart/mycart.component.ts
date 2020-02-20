import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  productAddedTocart;
  Object = Object;
  uniqueItemsInCart = {};
  itemList = [];
  paramCategory;
  isPresent: boolean = false;

  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit() {
    this.paramCategory = localStorage.getItem("ekart_category");
    this.productAddedTocart = this.productservice.getProductFromCart();
    this.removeDuplicateIds(this.productAddedTocart);
  }
  goTo(): void {
    if (this.paramCategory) {
      this.router.navigate(['/category/' + this.paramCategory]);
    } else {
      this.router.navigate(['/category/' + "/electronics"]);
    }
  }
  removeDuplicateIds(array) {
    array.forEach(obj => {
      if (obj.productId in this.uniqueItemsInCart) {
        if (this.uniqueItemsInCart[obj.productId].count <= obj.count)
          this.uniqueItemsInCart[obj.productId] = obj;
      } else
        this.uniqueItemsInCart[obj.productId] = obj;
    });
    for (let key in this.uniqueItemsInCart) {
      this.itemList.push(this.uniqueItemsInCart[key]);
    }
    if (this.itemList.length > 0) {
      this.isPresent = true;
    }
    return this.itemList;
  }
  order() {
    alert("Thank you for ordering!");
  }
}
