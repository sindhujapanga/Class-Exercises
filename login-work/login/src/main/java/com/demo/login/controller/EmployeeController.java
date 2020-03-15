package com.demo.login.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.login.pojo.EmployeePojo;

@RestController
public class EmployeeController {
	@GetMapping("/employee/{empId}")
	 EmployeePojo getEmployee(@PathVariable("empId") int eId) {
		 EmployeePojo empPojo = new EmployeePojo();
			empPojo.setEmpNo(13);
			empPojo.setEmpName("john");
			
			
			empPojo.setEmpSalary(1200);
	return empPojo;
	}

@GetMapping("emp")
 ArrayList Emp() {

		ArrayList list=new ArrayList();
	EmployeePojo empPojo = new EmployeePojo();
	empPojo.setEmpNo(13);
	empPojo.setEmpName("john");
	empPojo.setEmpSalary(1200);
	EmployeePojo empP1 = new EmployeePojo();
	empP1.setEmpNo(14);
	empP1.setEmpName("smith");
	empP1.setEmpSalary(1000);
	EmployeePojo empP2 = new EmployeePojo();
	empP2.setEmpNo(15);
	empP2.setEmpName("jim");
	empP2.setEmpSalary(1200);
	list.add(empPojo);
	list.add(empP1);
	list.add(empP2);
	return list;
	
}
}
   
	 

