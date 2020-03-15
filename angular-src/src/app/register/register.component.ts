import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employee=null;
  empName="";
  empGender="";
  empAddress="";
  empCountry="";
  empListening="";
  empPlaying="";
  empReading="";
  empComments="";
  constructor() { }

  ngOnInit(): void {
  }

  addEmp(){
   
    var newEmp={
  
                  Name:this.empName,
                  Gender:this.empGender,
                  Address:this.empAddress,
                  Country:this.empCountry,
                  Listening:this.empListening,
                  Playing:this.empPlaying,
                  Reading:this.empReading,
                  Comments:this.empComments
             
    };
    this.employee.push(newEmp);
  
  
  
    this.empName="";
  this.empGender="";
  this.empAddress="";
  this.empCountry="";
  this.empListening="";
  this.empPlaying="";
  this.empReading="";
  this.empComments="";
  
  }

}
