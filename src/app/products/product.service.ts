import { Injectable } from "@angular/core";
import { Iproduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";


@Injectable()

export class ProductService {
  private productUrl = 'api/products/products.json';
 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.productUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<Iproduct> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Iproduct>(url).pipe(
      tap(data => console.log('Product details: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error Occurred : ${err.error.message}`;
    } else {
      errorMessage = `Server returned Code : ${err.status}, error message is : ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);


  }
} 