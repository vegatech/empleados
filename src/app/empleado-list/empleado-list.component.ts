import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../shared/empleados.service";
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  constructor(private empleadosService:EmpleadosService) { }

  ngOnInit() {
    this.getEmployees();
  }



  Empleados;

  getEmployees = () =>
    this.empleadosService
      .getEmployees()
      .subscribe(res => (this.Empleados = res));

  /*deleteEmployee = data => this.empleadosService.deleteCoffeeOrder(data);

  markCompleted = data => this.empleadosService.updateCoffeeOrder(data);*/
}
