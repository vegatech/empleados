import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { ViewDetailsComponent } from './view-details/view-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

//resolver
import { EditEmployeeResolver } from './edit-employee/edit-employee.resolver';

//Meterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule  } from  '@angular/material/slider';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoListComponent,
    ViewDetailsComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule, MatButtonToggleModule ,MatSlideToggleModule
  ],
  providers: [EmpleadosService,EditEmployeeResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
