import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadosService } from './shared/empleados.service'
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule 
  ],
  providers: [EmpleadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
