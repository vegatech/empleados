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


  searchValue:string="";
  name_filtered_items: Array<any>;
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


  deleteEmployee(){

  }

  viewEmployee(){
    //this.router.navigate(['/details/'+ item.payload.doc.id]);
  }

  SearchByEmployeeName(){
    //let value = this.searchValue.toLowerCase();
    let value = this.searchValue;
    this.empleadosService.searcEmployees(value)
    .subscribe(result => {
      this.Empleados = result;
      //this.items = this.combineLists(result, this.age_filtered_items);
    })

  }
}
