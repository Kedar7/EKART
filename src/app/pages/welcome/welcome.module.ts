import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const WelcomeRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];
@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    RouterModule.forChild(WelcomeRoutes),
    CommonModule,
    NgbModule
  ]
})
export class WelcomeModule { }
