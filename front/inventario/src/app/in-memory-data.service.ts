import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Producto } from './producto/producto';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const productos = [
      {
        productoid: 1, nombre: 'TELEVISOR',
        descripcion: 'T',
        categoria: 'c',
        preciounitario: 'c',
        preciomasiva: 'c',
        codigoventa: 'c',
        stockactual: '0'
      },
      {
        productoid: 2, nombre: 'HORNO',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 3, nombre: 'CELULAR',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 4, nombre: 'TECLADO',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 5, nombre: 'COMPUTADOR',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 6, nombre: 'TALADRO',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 7, nombre: 'AUDIFONOS',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 8, nombre: 'CARGADOR',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 9, nombre: 'CONTROL',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        productoid: 10, nombre: 'FICHAS',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      }
    ];
    return { productos };
  }
  genId(productos: Producto[]): number {
    return productos.length > 0 ? Math.max(...productos.map(hero => hero.productoid)) + 1 : 50;
  }
}
