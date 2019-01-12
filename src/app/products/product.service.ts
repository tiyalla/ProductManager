import { Injectable } from "@angular/core";
import { IProduct } from "./products";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productUrl = "api/products.json";

    constructor(private http: HttpClient){
    }

//tap allows us to look at the emitted value in the stream without transforming the s
//stream. catchError takes an error handling method

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
          tap(data => console.log('All: '+ JSON.stringify(data))),
          catchError(this.handleError)
        );
    }


    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if(err.error instanceof ErrorEvent){
        errorMessage= `An error occurred: ${err.error.message}`;
      }else{
        errorMessage= `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}