
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee=null; 
show=false;
employeeName="";
employeeSalary="";

toggleAdd()
{
  this.show=!this.show;
}
addEmployee()
{
  var size=this.employee.length;
  var newId=+this.employee[size-1].empId;
  var emp={
    empId:++newId,
    empName:this.employeeName,
    empSalary:this.employeeSalary
  };
  this.employee.push(emp);
  this.employeeName="";
  this.employeeSalary="";
}
  constructor() { 
this.employee=[{
                  empId:'101',
                  empName:"John",
                  empSalary:"30000"

                 },
                 {
                  empId:'102',
                  empName:"Smith",
                  empSalary:"25000"

                 }];



  }

  ngOnInit(): void {
  }

}
