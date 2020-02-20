import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product';
import { Subject } from 'rxjs'
import { LocalStorageService } from '../services/local-storage.service';
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  urlMap = {
    "machinary": "api/products/products.json",
    "electronics": 'api/products/electronics.json',
    "sports": 'api/products/sports.json',
    "clothes": 'api/products/clothes.json',
  };

  private triggerSubject = new BehaviorSubject(1);
  triggerEnter = this.triggerSubject.asObservable();

  private currentCartCount = new BehaviorSubject(0);
  currentCount = this.currentCartCount.asObservable();

  public totalSubject = new Subject();
  private messgeSource = new BehaviorSubject<boolean>(false);

  currentMessage = this.messgeSource.asObservable();
  mapId;
  productAddedTocart = [];
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  triggerMessage(message) {
    return this.triggerSubject.next(message);
  }
  changeMessage(message: boolean) {
    this.messgeSource.next(message);
  }
  sendTotal(totalVal) {
    this.totalSubject.next(totalVal)
  }
  updateCartCount(count: number) {
    return this.currentCartCount.next(count)
  }
  getProducts(id): Observable<IProduct[]> {
    this.mapId = id;
    let mainUrl = this.urlMap[id];
    return this.http.get<IProduct[]>(mainUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  getAllProducts() {
    let calls = [];
    for (let each in this.urlMap) {
      calls.push(this.http.get(this.urlMap[each]));
    }
    return forkJoin(calls);
  }
  getProduct(id: number) {
    let foundProduct;
    return this.getAllProducts()
      .pipe(map((products: IProduct[]) => {
        let flatArray = products.reduce((acc, val) => acc.concat(val), []);
        foundProduct = flatArray.find(p =>
          p.productId === id
        );
        return foundProduct;
      }));
  }
  addProductToCart(products: any) {
    localStorage.setItem("product", JSON.stringify(products));
  }
  getProductFromCart() {
    if (JSON.parse(localStorage.getItem("product")) === null) {
      return this.productAddedTocart = [];
    } else {
      return JSON.parse(localStorage.getItem("product"));
    }
  }
  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }

}
