import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';

const routes: Routes = [
  { path: '', component: EmpleadoListComponent  },
  { path: 'home', component: EmpleadoListComponent  },
  { path: 'new-employee', component: EmpleadosComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
