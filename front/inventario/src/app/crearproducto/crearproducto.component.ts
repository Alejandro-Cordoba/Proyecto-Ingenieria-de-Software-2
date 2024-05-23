import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { PRODUCTOS } from '../mock-producto';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {
  productos = PRODUCTOS;
  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
  }

  add(name: string,decripcion: string,categoria: string,preciounitario: string,preciomasiva: string,codigoventa: string,stockactual: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productoService.addProducto({ name, decripcion,categoria,preciounitario,preciomasiva,codigoventa,stockactual } as unknown as Producto)
      .subscribe(productos => {
        this.productos.push(productos);
      });
  }

}
