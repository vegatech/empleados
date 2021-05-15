import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { EmpleadosService } from "../shared/empleados.service";

@Injectable()
export class EditEmployeeResolver implements Resolve<any> {

  constructor(public empleadosService: EmpleadosService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let employeeId = route.paramMap.get('id');

      this.empleadosService.getEmployee(employeeId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
