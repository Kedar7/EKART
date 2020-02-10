import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MycartComponent } from './mycart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const MyCartRoutes: Routes = [
  {
    path: '',
    component: MycartComponent
  }
];
@NgModule({
  declarations: [
    MycartComponent
  ],
  imports: [
    RouterModule.forChild(MyCartRoutes),
    CommonModule,
    NgbModule
  ]
})
export class MyCartModule { }
