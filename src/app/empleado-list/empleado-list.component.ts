import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../shared/empleados.service";
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from  "../shared/paises.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  searchValue:string="";
  name_filtered_items: Array<any>;
  Empleados;


  constructor(private empleadosService:EmpleadosService,

    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getEmployees();

  }



  getEmployees = () =>
    this.empleadosService
      .getEmployees()
      .subscribe(res => (this.Empleados = res));




  AddUser(){
    console.log("ingresa boton nuevo empleado");
    this.router.navigate(['/new-employee']);
  }
 delete (data){
      Swal.fire({
        title: 'Esta seguro?',
        text: "Los cambios son irreversibles!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borrar Registro!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'El registro ha sido eliminado.',
            'success'
          )
          this.empleadosService.deleteEmployee(data);
        }
      })
}



  viewEmployee(item){
    console.log("Entra a ver a ver empleado");
    console.log("item:"+item.payload.doc.id);
    this.router.navigate(['/details/'+ item.payload.doc.id]);
  }

  SearchByEmployeeName(){
    let value = this.searchValue.toLowerCase();
    //let value = this.searchValue;
    this.empleadosService.searcEmployees(value)
    .subscribe(result => {
      this.Empleados = result;

    })

  }
}
