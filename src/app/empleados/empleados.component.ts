import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../shared/empleados.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadosService: EmpleadosService) { }
  cargos = ["Diseñador", "Pogramador", "Fundador CEO", "Recursos Humanos"];
  ngOnInit(): void {
  }
  employee = [];addCargo = empleado => this.employee.push(empleado);removeEmployee = employee => {
    let index = this.employee.indexOf(employee);
    if (index > -1) this.employee.splice(index, 1);};

    onSubmit(){
      this.empleadosService.form.value.empleado = this.employee;
      let data = this.empleadosService.form.value;
      
     this.empleadosService.createEmployeesSave(data)
         .then((res) => {
          console.log('This is init method');
             /*do something here....
             maybe clear the form or give a success message*/
             if (res.status === 200) { 
              console.log('This is init method2');
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El producto fue agregado',
                showConfirmButton: false,
                timer: 1500
              });
            }
         });

    }
}
