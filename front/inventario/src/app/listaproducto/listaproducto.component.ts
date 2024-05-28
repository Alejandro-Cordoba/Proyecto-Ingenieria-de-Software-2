import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listaproducto',
  templateUrl: './listaproducto.component.html',
  styleUrls: ['./listaproducto.component.css']
})
export class ListaproductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos.slice(0, productos.length));
  }

}
