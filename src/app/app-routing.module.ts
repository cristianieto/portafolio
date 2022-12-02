import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: ServiciosComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
