package com.demo.login.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.demo.login.pojo.LoginPojo;

@RestController
@RequestMapping("login")
public class LoginController {
	@GetMapping("a")
	 LoginPojo getLogin(@PathVariable("name") String name,@PathVariable("password") String password) 
	{
		
			
        
		LoginPojo loginPojo = new LoginPojo();
	   
	    loginPojo.setUname(name);
	    loginPojo.setPassword(password);
	    if(name.equals("admin") && password.equals("admin")) {
	    	 loginPojo.setRole("admin");
	    }
	    	 else {
	    		loginPojo.setRole(""); 
	    	 }
	    return loginPojo;
		}
	
	@GetMapping("validate")
	LoginPojo validateLogin(@RequestBody LoginPojo loginpojo)
	{
		if(loginpojo.getUname().equals("admin")&& loginpojo.getPassword().equals("admin")) {
			loginpojo.setRole("admin");
		}
		return loginpojo;
	}
		
	}


