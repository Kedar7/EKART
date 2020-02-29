import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent as AuthGuard } from './guard/auth.component';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: './pages/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'my-cart',
    loadChildren: './pages/mycart/mycart.module#MyCartModule',
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
]
@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
