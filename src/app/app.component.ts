import { Component } from '@angular/core';
import { Employees } from './models/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-simple-crud';
  employeesArray: Employees[] = [
    {
      id: 1,
      name: 'oscar',
      country: 'Costa Rica',
    },
    { id: 2, name: 'juan', country: 'Costa Rica' },
    { id: 3, name: 'luis', country: 'Canada' },
  ];

  selectedEmployees: Employees = new Employees();
  data = new Employees();
  operForEdit(employee: Employees){
    this.selectedEmployees = employee;
  }
  addOrEdit() {
    this.selectedEmployees.id = this.employeesArray.length + 1;
    this.employeesArray.push(this.selectedEmployees);

    this.selectedEmployees = new Employees();
  }
}
