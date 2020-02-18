
import { Component, Output, EventEmitter, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public model: any;
  products = [];
  isHiddenLoginBtn : boolean = false;
  cartItemCount:number=0;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private route: Router, private router: ActivatedRoute, private productservice: ProductService) {
  }
  public hideLogin(value): void {
    this.isHiddenLoginBtn = value;
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.products.filter(v =>
          v.productName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
    )
  formatter = (x: { productName: string }) => x.productName;
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  ngOnInit() {
      .clear();
    this.productservice.currentCount.subscribe(msg => {
      this.cartItemCount = msg
    });
    let id = "machinary";
    $(document).ready(function () {
      $(".trigger").click(function () {
        $(".hamburger").toggleClass("open");
      });
    });
    this.productservice.getProducts(id).subscribe((data) => {
      this.products = data;
    });
  }
  navigateToProducts() {
    if (this.model.productId) {
      this.route.navigate(['/product/' + this.model.productId]);
    }
  }
  logout(){
    localStorage.removeItem("__nalanda-user-name");
    this.isHiddenLoginBtn = false;
    this.route.navigate(['/welcome']);

  }
}

