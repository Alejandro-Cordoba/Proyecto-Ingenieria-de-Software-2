import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-buscarproducto',
  templateUrl: './buscarproducto.component.html',
  styleUrls: ['./buscarproducto.component.css']
})
export class BuscarproductoComponent implements OnInit {

  productos$: Observable<Producto[]>;
  private searchTerms = new Subject<string>();

  constructor(private productoService: ProductoService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.productos$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.productoService.searchProductos(term)),
    );
  }
}
