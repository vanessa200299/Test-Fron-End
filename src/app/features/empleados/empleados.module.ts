import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './components/empleados.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmpleadoService } from './services/empleado.service';
import { MaterialAngularModule } from 'src/app/material-angular/material-angular/material-angular.module';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [EmpleadosComponent, CreateEmpleadoComponent],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    HttpClientModule,
    MaterialAngularModule,
    ShareModule
  ],
  providers: [HttpClient, EmpleadoService],
})
export class EmpleadosModule {}
