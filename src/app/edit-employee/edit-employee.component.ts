import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmpleadosService } from "../shared/empleados.service";
import { Router } from '@angular/router';
import { PaisesService } from  "../shared/paises.service";
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import * as moment from 'moment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  exampleForm: FormGroup;
  item: any;
  public fechaedad:any;
  public edad:number;
  paises= [];
  public selectedVal: string;
  isChecked = true;
  isStatus: string= "Activo";
  cargos = ["Administrador", "Contador", "Fundador CEO", "Recursos Humanos"];
  cargosT = ["Diseñador", "Pogramador", "Soporte Tecnico", "Q & A"];
  validation_messages = {
    'nombre': [
      { type: 'required', message: 'Nombre es requerido.' }
    ],
    'nombreusuario': [
      { type: 'required', message: 'Nombre usuario es requerido.' },
      { type: 'specialchars', message: 'No se aceptan caracteres especiales.' }
    ],
    'edad': [
      { type: 'required', message: 'Edad Es requerida.' },
      { type: 'min', message: 'Edad minima es 18 .' }
    ]
  };

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public empleadosService: EmpleadosService,
    public paisesSerice: PaisesService,
  ) { }

  ngOnInit(): void {
    this.paisesSerice.getAllCountries().subscribe(data =>{
      let result = data.map(a => a.name);
      this.paises =result;
      this.onChangeArea("Administratíva");
      this.onChanges();
    })
    console.log("ingresa ngOnInit");
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        console.log("ngOnInit :data"+data);
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }
  specialchars(control: FormControl): { [key: string]: boolean } {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (control.value && nameRegexp.test(control.value)) {
       return { invalidname: true };
    }
}
  createForm() {
    console.log("Create formº");
    this.exampleForm = this.fb.group({
      nombre: [this.item.nombre, Validators.required],
      nombreusuario: [this.item.nombreusuario, Validators.required ],
      fechanacimiento: [this.item.fechanacimiento, Validators.required],
      cargo: [this.item.cargo,{disabled: true}, Validators.required],
      area: [this.item.area, Validators.required],
      edad: [this.item.edad, Validators.min(18)],
      pais: [this.item.pais, Validators.required],
      estado: [this.item.estado, Validators.required],
      comision: [this.item.comision, Validators.required],
      fechacontratacion: [this.item.fechacontratacion, Validators.required]
    });
    this.exampleForm.get('comision').disable();
  }
  onChanges() {
    this.exampleForm.get('cargo').valueChanges
    .subscribe(selectedCargo => {
        if (selectedCargo != 'Fundador CEO') {
            this.exampleForm.get('comision').reset();
            this.exampleForm.get('comision').disable();
        }
        else {
            this.exampleForm.get('comision').enable();
        }
    });
}

  onSubmit(value){
    this.empleadosService.updateEmployee(this.item.id, value)
    .then(
      res => {
        this.alerta();
      }
    )
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
    if (this.selectedVal == "Administratíva"){
      this.cargos.length=0;
      this.cargos = ["Administrador", "Contador", "Fundador CEO", "Recursos Humanos"];
    }else{
      this.cargos.length=0;
      this.cargos =["Diseñador", "Pogramador", "Soporte Tecnico", "Q & A"];
    }
    console.log("Valor Area:"+ this.selectedVal);
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
  cancel(){
    this.router.navigate(['/home']);
  }


  changeCargo(e) {
    /*this.cargo.setValue(e.target.value, {
      onlySelf: true
    })*/
  }

  changePais(e) {
    /*this.pais.setValue(e.target.value, {
      onlySelf: true
    })*/
  }


  alerta(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El registro fue editado exitosamente',
      showConfirmButton: false,
      timer: 1500
    }
    );
    this.router.navigate(['/home']);
  }


}

