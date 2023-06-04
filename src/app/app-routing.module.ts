import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';

import { TabVehiculoComponent } from './components/tab-vehiculo/tab-vehiculo.component';




const routes: Routes = [
 {path: '',component:BarraLateralComponent},
  {path: 'vehiculo',component:VehiculoComponent},
  {path: 'vehiculo/:id',component:VehiculoComponent},
  {path: 'tab-vehiculo',component:TabVehiculoComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
