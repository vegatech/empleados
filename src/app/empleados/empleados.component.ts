import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../shared/empleados.service";
import { PaisesService } from  "../shared/paises.service";
import { ActivatedRoute, Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

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
  isChecked = true;
  isStatus: string= "Activo";
  public selectedVal: string;



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
    this.selectedVal ='';
    this.empleadosService.form.get('comision').disable();
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


    changeCargo(e) {
      /*this.cargo.setValue(e.target.value, {
        onlySelf: true
      })*/
    }

    onChange(value: MatSlideToggleChange) {

      if (this.isChecked === false){

      this.isChecked = false;
      this.isStatus= "Inactivo";
      console.log("Estado"+this.isStatus);
      }else{
      this.isChecked = true;

      this.isStatus= "Activo";
      console.log("Estado"+this.isStatus);
      }
    }
    public onChangeArea(val: string) {
      this.selectedVal = val;
      console.log("Valor Area:"+ this.selectedVal);
      if (this.selectedVal == "Administratíva"){
        this.cargos.length=0;
        this.cargos = ["Administrador", "Contador", "Fundador CEO", "Recursos Humanos"];
      }else{
        this.cargos.length=0;
        this.cargos =["Diseñador", "Pogramador", "Soporte Tecnico", "Q & A"];
      }
    }

   public CalculateAge2(): number {

    this.edad =moment().diff(this.fechaedad, 'years');
    if (this.edad < 18){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Edad minima debe ser 18 !!',
        showConfirmButton: false,
        timer: 1500
      }
      );
      this.fechaedad =null;
      this.edad=null;
      return null;
    }else{
    return moment().diff(this.fechaedad, 'years');
    }
  }
  alerta(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El registro fue Agregado Exitosamente',
      showConfirmButton: false,
      timer: 1500
    }
    );
    this.router.navigate(['/home']);
  }
  cancel(){
    this.router.navigate(['/home']);
  }


}
