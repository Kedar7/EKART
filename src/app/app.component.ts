import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as $ from "jquery";
import { ProductService } from './services/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideBarOpen = false;
  isMobile: boolean;
  closeSideBar: boolean;
  constructor(private breakpointObserver: BreakpointObserver, private productservice: ProductService) { }
  ngOnInit() {
    if ($(window).width() > 600) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
    this.productservice.currentMessage.subscribe((message) => {
      this.sideBarOpen = message;
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  close(){
     $(".trigger")[0].click(function(){
        $(".hamburger").toggleClass("open");
        this.sideBarOpen = false;
      });
  }
}
