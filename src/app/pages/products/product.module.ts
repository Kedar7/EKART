import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './../contact/contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'category/:id', component: ProductListComponent },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]),
    SharedModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ContactComponent
  ]
})
export class ProductModule { }
