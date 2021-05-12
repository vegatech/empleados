import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../shared/empleados.service";
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadosService: EmpleadosService) { }
  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
  ngOnInit(): void {
  }
  coffeeOrder = [];addCoffee = coffee => this.coffeeOrder.push(coffee);removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);};

    onSubmit(){
      
    }
}
