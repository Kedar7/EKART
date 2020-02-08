import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './pages/home/welcome.component';
import { ProductModule } from './pages/products/product.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule, MatSnackBarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './shared/filter-pipe';
import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthComponent } from './guard/auth.component'
import { AuthComponent as AuthGuard } from './guard/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SearchFilterPipe,
    LetterBoldPipe,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'my-cart', component: MycartComponent,canActivate: [AuthGuard] },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [ AuthComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
