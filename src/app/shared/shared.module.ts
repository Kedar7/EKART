import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
