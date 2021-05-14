import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../shared/empleados.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  constructor(private empleadosService:EmpleadosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

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


  AddUser(){
    console.log("ingresa boton nuevo empleado");
    this.router.navigate(['/new-employee']);
  }
}
