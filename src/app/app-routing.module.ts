import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', component: EmpleadoListComponent  },
  { path: 'home', component: EmpleadoListComponent  },
  { path: 'new-employee', component: EmpleadosComponent  },
  { path: 'details/:id', component: ViewDetailsComponent },
  { path: 'edit', component: EditEmployeeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
