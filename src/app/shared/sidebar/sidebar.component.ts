import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import $ from "jquery";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ToggleSidebar: boolean;
  constructor(private productservice: ProductService) { }

  ngOnInit() {
  }
  closeSidebar() {
    this.ToggleSidebar = false;
    $(".trigger")[0].click(function(){
      $(".hamburger").toggleClass("open");
      this.ToggleSidebar = false;
    });
    this.productservice.changeMessage(this.ToggleSidebar);
  };

}
