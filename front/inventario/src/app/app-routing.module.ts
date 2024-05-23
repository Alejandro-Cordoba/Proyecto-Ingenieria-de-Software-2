import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarproductoComponent } from './buscarproducto/buscarproducto.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { ListaproductoComponent } from './listaproducto/listaproducto.component';
import { ProductoComponent } from './producto/producto.component';
import { CrearproductoComponent } from './crearproducto/crearproducto.component';

const routes: Routes = [
  { path: '', redirectTo: '/buscar', pathMatch: 'full' },
  { path: 'buscartodos', component: ListaproductoComponent },
  { path: 'crear', component: ProductoComponent },
  { path: 'buscar', component: BuscarproductoComponent },
  { path: 'nuevoproducto', component: CrearproductoComponent },
  { path: 'detalle/:id', component: DetalleproductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
