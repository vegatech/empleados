import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private firestore: AngularFirestore

    ) { }

  form = new FormGroup({
    nombre: new FormControl(''),
    nombre_busqueda: new FormControl(''),
    fechanacimiento: new FormControl(''),
    edad: new FormControl(''),
    nombreusuario: new FormControl(''),
    fechacontratacion: new FormControl(''),
    pais: new FormControl(''),
    estado: new FormControl(false),
    area: new FormControl(''),
    cargo: new FormControl(''),
    comision: new FormControl('')
})
    createEmployeesSave(data) {
      console.log("Guarda Registro");
      console.log(JSON.stringify(data));
      return new Promise<any>((resolve, reject) =>{
          this.firestore
              .collection("Empleados")
              .add(data)
              .then(res => {}, err => reject(err));
      });
    }

    updateEmployee(data) {
      return this.firestore
        .collection("Empleados")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
    }
    getEmployees() {
      return  this.firestore.collection("Empleados").snapshotChanges();
    }
    getEmployee(employeeKey){
      console.log("id empleado:"+employeeKey);
      return this.firestore.collection('Empleados').doc(employeeKey).snapshotChanges();
    }

    deleteEmployee(data) {
      return this.firestore
        .collection("Empleados")
        .doc(data.payload.doc.id)
        .delete();
    }
    searchByName(data){
      return this.firestore
      .collection("Empleados")
      .doc(data.payload.doc.nombre)
      .get();


    }
    searcEmployees(searchValue){
      return this.firestore.collection('Empleados',ref => ref.where('nombre_busqueda', '>=', searchValue)
        .where('nombre_busqueda', '<=', searchValue + '\uf8ff'))
        .snapshotChanges()
    }
    createEmployee(value){
      return this.firestore.collection('Empleados').add({
        nombre: value.nombre,
        nombre_busqueda: value.nombre.toLowerCase(),
        nombreusuario: value.usuario,
        fechacontratacion: value.fechacontratacion,
        fechanacimiento: value.fechanacimiento,
        edad: parseInt(value.edad),
        estado: value.estado,
        area: value.area,
        cargo: value.cargo,
        pais: value.pais
      });
    }



 }

