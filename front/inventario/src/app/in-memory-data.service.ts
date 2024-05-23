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
        id: 1, name: 'TELEVISOR',
        descripcion: 'T',
        categoria: 'c',
        preciounitario: 'c',
        preciomasiva: 'c',
        codigoventa: 'c',
        stockactual: '0'
      },
      {
        id: 2, name: 'HORNO',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 3, name: 'CELULAR',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 4, name: 'TECLADO',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 5, name: 'COMPUTADOR',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 6, name: 'TALADRO',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 7, name: 'AUDIFONOS',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 8, name: 'CARGADOR',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 9, name: 'CONTROL',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      },
      {
        id: 10, name: 'FICHAS',
        descripcion: '',
        categoria: '',
        preciounitario: '',
        preciomasiva: '',
        codigoventa: '',
        stockactual: ''
      }
    ];
    return {productos};
  }
  genId(productos: Producto[]): number {
    return productos.length > 0 ? Math.max(...productos.map(hero => hero.id)) + 1 : 50;
  }
}
