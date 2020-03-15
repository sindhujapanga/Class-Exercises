import * as core from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@core.Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  allEmployees : Employee[];
  //deleteEmployees: any;
  constructor(protected http: HttpClient) {}
    
  getAllEmployees(){
    return this.http.get("http://localhost:8076/api/employee/all");
  
  }
  
  addEmployee(emp: Employee){
    // let size = this.allEmployees.length;
    return this.http.post("http://localhost:8076/api/employee", emp);
  }
  deleteEmployees()
  
  {
    return this.http.get("http://localhost:8076/api/employee/");
   } 
  
  

 
  }
  
