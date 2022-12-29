import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { BooksModule } from './books/books.module';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  apiURL = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch Book list
  getBooks(): Observable<BooksModule> {
    return this.http
      .get<BooksModule>(this.apiURL + '/books')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Book
  getBook(id: any): Observable<BooksModule> {
    return this.http
      .get<BooksModule>(this.apiURL + '/books/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createBook(mybook: {
    name: string;
    author: string;
    price: number;
  }): 
  Observable<BooksModule> {
    return this.http
      .post<BooksModule>(
        this.apiURL + '/books',
        JSON.stringify(mybook),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateBook(id:any, mybook:any) :Observable<BooksModule> {
    return this.http
    .put<BooksModule>(
    this. apiURL + '/books/'+id,
    JSON.stringify(mybook) ,
    this . httpOptions).pipe(retry(1), catchError(this.handleError)); 
    }

    deleteBook(id: any) 
    {
      return this.http.delete<BooksModule>
      (this.apiURL+'/books/'+id,this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
    }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
//git config --global user.email "ciriltyson2001@gmail.com"
//git config --global user.name "Ciril"
