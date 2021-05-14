import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadosService } from './shared/empleados.service'
import { ReactiveFormsModule } from "@angular/forms";

//environment import
import { environment } from "src/environments/environment";
//angularfire imports
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule  
  ],
  providers: [EmpleadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
