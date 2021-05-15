import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../shared/empleados.service";
import { PaisesService } from  "../shared/paises.service";
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  employee = [];
  public fechaedad:any;
  public edad:number;

  constructor(public empleadosService: EmpleadosService,
    public paisesSerice: PaisesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  cargos = ["Diseñador", "Pogramador", "Fundador CEO", "Recursos Humanos"];
  areas: any = ['Administrativa', 'Tecnologia'];
  paises= [];
  ngOnInit(): void {
    this.paisesSerice.getAllCountries().subscribe(data =>{
      let result = data.map(a => a.name);
      this.paises =result;
    })
  }

  addCargo = empleado => this.employee.push(empleado);removeEmployee = employee => {
    let index = this.employee.indexOf(employee);
    if (index > -1) this.employee.splice(index, 1);};

    onSubmit(){
      this.empleadosService.form.value.empleado = this.employee;
      let data = this.empleadosService.form.value;

     this.empleadosService.createEmployee(data)
     .then(
      res => {
        this.alerta();
      }
     )


    }
    /*get_paises(){
      this.paisesSerice.getPaises().subscribe(res =>{
        console.log(JSON.stringify(res));
      })
    }*/

    changeCargo(e) {
      /*this.cargo.setValue(e.target.value, {
        onlySelf: true
      })*/
    }

    SearchByEmployeeName(){

    }


   public CalculateAge2(): number {
     this.fechaedad
     console.log("this.fechaedad:"+this.fechaedad);
     console.log(moment().diff(this.fechaedad, 'years'));
     this.edad =moment().diff(this.fechaedad, 'years');
    return moment().diff(this.fechaedad, 'years');
  }
  alerta(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El producto fue agregado',
      showConfirmButton: false,
      timer: 1500
    }
    );
    this.router.navigate(['/home']);
  }


}
