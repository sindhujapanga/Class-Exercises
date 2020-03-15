package com.demo.login.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="hello")
public class HelloController {
	@RequestMapping(value="display", method= RequestMethod.GET)
	public String helloDisplay() {
		return "hello!";
	}
	@RequestMapping(value="display/{employeeID}", method = RequestMethod.GET)
	public String Display(@PathVariable("employeeID") int empid) {
		return "hello" +empid + "s";
	}

}
