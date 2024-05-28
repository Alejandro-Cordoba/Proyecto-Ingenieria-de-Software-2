import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto/producto';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})

export class CrearproductoComponent implements OnInit {
  @ViewChild('nombre') nombreInput: any;
  @ViewChild('descripcion') descripcionInput: any;
  @ViewChild('categoria') categoriaInput: any;
  @ViewChild('precioUni') precioUniInput: any;
  @ViewChild('precioIva') precioIvaInput: any;
  @ViewChild('codVenta') codVentaInput: any;
  @ViewChild('cantidad') cantidadInput: any;

  productos: Producto[] = [];
  categorias: string[] = ['otros', 'Televisores', 'Computadores', 'Celulares'];

  categoriaSeleccionada: string;
  mostrarMensaje: boolean;
  mensajeRespuesta;
  mostrarBoton = true;
  camposCompletos: boolean = false;
  precioConIva: number = 0;
  iva = 0.19;

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(20),
  ]);

  descripcionControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(30)
  ]);

  precioUniControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$'),
    Validators.min(200000),
    Validators.max(30000000)
  ]);

  sumarIva() {
    const precioSinIva = parseFloat(this.precioUniControl.value);
    this.precioConIva = precioSinIva * (1 + this.iva);
  }

  codigoVentaControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$')
  ]);

  cantidadControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$'),
  ]);

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.generarCodigoProducto()
  }

  generarCodigoProducto() {
    const codigoAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    this.codigoVentaControl.setValue(codigoAleatorio);
  }

  checkFields() {
    if ((this.nombreControl.errors || this.descripcionControl.errors || this.precioUniControl.errors || this.cantidadControl.errors)) {
      this.camposCompletos = false;
    } else {
      this.camposCompletos = true;
    }
  }

  add(nombre: string, descripcion: string, categoria: string, preciounitario: string, preciomasiva: string, codigoventa: string, stockactual: string): void {
    nombre = nombre.trim();
    if (!nombre) {
      this.mostrarMensajeExito(false);
      return;
    }
    this.productoService.addProducto({ nombre, descripcion, categoria, preciounitario, preciomasiva, codigoventa, stockactual } as unknown as Producto)
      .subscribe(productos => {
        this.productos.push(productos);
      });
    this.mostrarMensajeExito(true);
    this.clearFields();
  }

  clearFields() {
    // Limpiar los valores de todos los campos
    this.nombreInput.nativeElement.value = '';
    this.descripcionInput.nativeElement.value = '';
    this.categoriaInput.nativeElement.value = '';
    this.precioUniInput.nativeElement.value = '';
    this.precioIvaInput.nativeElement.value = '';
    this.codVentaInput.nativeElement.value = '';
    this.cantidadInput.nativeElement.value = '';
    this.camposCompletos = false;
  }

  // Ocultar el mensaje después de 3 segundos
  mostrarMensajeExito(p0: boolean) {
    this.mostrarMensaje = true;
    if (p0 == true) {
      this.mensajeRespuesta = 'Guardado exitoso'
    } else {
      this.mensajeRespuesta = 'Error Guardando Informacion'
    }
    this.mensajeRespuesta = 'Guardado exitoso'
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000);
  }
}
