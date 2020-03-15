package com.abc.employee.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.abc.employee.exceptions.EmployeeNotFoundEception;

@ControllerAdvice
public class GlobalExceptionHandlerController {
	@ResponseBody
	@ExceptionHandler(EmployeeNotFoundEception.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	Map employeeNotFoundHandler(EmployeeNotFoundEception ex) {
		Map  map=new HashMap();
		map.put("error Code",HttpStatus.NOT_FOUND );
		map.put("errorMessage", ex.getMessage());
		map.put("errorDate", new Date());
		return map;
		
		
	}
	
	

}
