import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

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
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productAddedTocart = this.productservice.getProductFromCart();
    this.removeDuplicateIds(this.productAddedTocart);
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
    return this.itemList;
  }

}
