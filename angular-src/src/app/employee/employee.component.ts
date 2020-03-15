import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = null;
  show: boolean = false;
  employeeName: string = '';
  employeeSalary: string = '';
  constructor(protected employeeService: EmployeeService) { 
  
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (response:any)=>{
        console.log(response.data);
        this.employees = response;
      }
    );
  }
  Toggle(){
    this.show=!this.show;
  }
  addEmployee(){
  //  var size: number = this.employees.length;
  //  var newId: number = +this.employees[size-1].eId;
    var emp: Employee = {
                          eId : 0,
                          eName : this.employeeName,
                          eSalary : this.employeeSalary
                        };
    this.employeeService.addEmployee(emp).subscribe(
      (response: any)=>{
        this.employees.push(response);
      }
    );
    this.employeeName = "";
    this.employeeSalary = "";
    
                      
  }
deleteEmployees(eId: number){
  
 //  this.employeeService.deleteEmployees(eId);
  // this.employees = this.employeeService.getAllEmployees();
  // this.emartService.deleteCartItem(itemNo);
 
   this.employeeService.deleteEmployees().subscribe(
    (response: any)=>{
      this.employees.push(response);
    }
  );
  } 

}
