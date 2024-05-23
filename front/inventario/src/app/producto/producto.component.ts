import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { PRODUCTOS } from '../mock-producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos = PRODUCTOS;
  selectedProducto: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(producto: Producto): void {
    this.selectedProducto = producto;
  }

}
