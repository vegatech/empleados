import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  form = new FormGroup({        
    nombre: new FormControl(''),
    
    fechanacimiento: new FormControl(''),
    nombreusuario: new FormControl(''),
    fechanacontratacion: new FormControl(''),
    
    pais: new FormControl(''),
    coffeeOrder: new FormControl(''), 
    estado: new FormControl(false),
    area: new FormControl(''),
    cargo: new FormControl(''),
    comision: new FormControl('') 
})}

