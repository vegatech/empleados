import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private firestore: AngularFirestore ) { }

  form = new FormGroup({        
    nombre: new FormControl(''),   
    fechanacimiento: new FormControl(''),
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

    deleteEmployee(data) {
      return this.firestore
        .collection("Empleados")
        .doc(data.payload.doc.id)
        .delete();
    }
}

