import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Producto } from '../producto/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  @Input() producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProducto;
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(id)
      .subscribe(producto => this.producto = producto);
    this.producto
  }

  goBack(): void {
    this.location.back();
  }
}
