package com.abc.employee.exceptions;

public class EmployeeNotFoundEception extends RuntimeException {
  
	public EmployeeNotFoundEception(Integer eId) {
		super("could not find employee"+eId);
	}
}
