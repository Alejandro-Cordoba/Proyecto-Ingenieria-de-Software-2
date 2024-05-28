import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from '../producto.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto[];
  filtro: string = '';
  selectedProducto: Producto;
  productosFiltrados: any[] = [];
  errorMsg: string;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
      .pipe(
        catchError(error => {
          // Manejo del error aquí
          console.error('Error al obtener productos:', error);
          if (error.status === 500) {
            this.mostrarMensajeError('Se ha producido un error en el servidor. Por favor, inténtelo de nuevo más tarde.');
          } else {
            this.mostrarMensajeError('Error al obtener productos. Por favor, inténtelo de nuevo más tarde.');
          }
          return throwError(error); // Lanza el error para que el componente lo maneje si es necesario
        })
      )
      .subscribe(productos => this.producto = productos.slice(0, productos.length));
  }

  mostrarMensajeError(mensaje: string): void {
    this.errorMsg = mensaje;
  }

  filtrarProductos() {
    this.productosFiltrados = this.producto.filter(producto => {
      const idMatches = producto.productoid.toString().includes(this.filtro.toLowerCase());
      const nombreMatches = producto.nombre.toLowerCase().includes(this.filtro.toLowerCase());
      return idMatches || nombreMatches;
    });
  }

  onSelect(producto: Producto): void {
    this.selectedProducto = producto;
  }

}
