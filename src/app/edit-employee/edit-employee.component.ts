import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmpleadosService } from "../shared/empleados.service";
import { Router } from '@angular/router';
import { PaisesService } from  "../shared/paises.service";
import * as moment from 'moment';
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
  cargos = ["Diseñador", "Pogramador", "Fundador CEO", "Recursos Humanos"];

  validation_messages = {
    'nombre': [
      { type: 'required', message: 'Nombre es requerido.' }
    ],
    'nombreusuario': [
      { type: 'required', message: 'Nombre usuario es requerido.' }
    ],
    'edad': [
      { type: 'required', message: 'Edad Es requerida.' },
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

  createForm() {
    console.log("Create formº");
    this.exampleForm = this.fb.group({
      nombre: [this.item.nombre, Validators.required],
      nombreusuario: [this.item.nombreusuario, Validators.required],
      fechanacimiento: [this.item.fechanacimiento, Validators.required],
      cargo: [this.item.cargo, Validators.required],
      area: [this.item.area, Validators.required],
      edad: [this.item.edad, Validators.required],
      pais: [this.item.pais, Validators.required],
      estado: [this.item.estado, Validators.required],
      comision: [this.item.comision, Validators.required],
      fechacontratacion: [this.item.fechacontratacion, Validators.required]
    });
  }

  onSubmit(value){

  }


  public CalculateAge2(): number {
    this.fechaedad
    console.log("this.fechaedad:"+this.fechaedad);
    console.log(moment().diff(this.fechaedad, 'years'));
    this.edad =moment().diff(this.fechaedad, 'years');
   return moment().diff(this.fechaedad, 'years');
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
    /*this.cargo.setValue(e.target.value, {
      onlySelf: true
    })*/
  }
}
