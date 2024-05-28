import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Producto } from './producto/producto';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productoUrl = 'http://localhost:8080/Products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productoUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Producto[]>('getProductos', []))
      );
  }

  getProducto(id: number): Observable<Producto> {
    const url = `${this.productoUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(
      tap(_ => this.log(`fetched productos id=${id}`)),
      catchError(this.handleError<Producto>(`getProducto id=${id}`))
    );
  }

  searchProductos(term: string): Observable<Producto[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Producto[]>(`${this.productoUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found productos matching "${term}"`) :
        this.log(`no productos matching "${term}"`)),
      catchError(this.handleError<Producto[]>('searchProductos', []))
    );
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productoUrl, producto, this.httpOptions).pipe(
      tap((newProducto: Producto) => console.log(`added producto w/ id=${newProducto.productoid}`)),
      catchError(this.handleError<Producto>('addProducto'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ProductoService: ${message}`);
  }

}
