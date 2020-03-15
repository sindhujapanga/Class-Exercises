package com.abc.employee.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.employee.dao.EmployeeDao;
import com.abc.employee.dao.entity.EmployeeEntity;
import com.abc.employee.exceptions.EmployeeNotFoundEception;
import com.abc.employee.model.EmployeePojo;


@Service
public class EmployeeServiceImpl implements EmployeeService{
     @Autowired
     EmployeeDao empDao;
	@Override
	public List<EmployeePojo> getAllEmployees() {
		List<EmployeePojo> allEmpPojo= new ArrayList();
		Iterable<EmployeeEntity> allEmpEntity = empDao.findAll();
		Iterator itr= (Iterator) allEmpEntity.iterator();
		while(itr.hasNext()) {
			EmployeeEntity empEntity = (EmployeeEntity) itr.next();
			EmployeePojo empPojo = new EmployeePojo(empEntity.geteId(),empEntity.geteName(),empEntity.geteSalary());
					allEmpPojo.add(empPojo);
		}
		
		
		// TODO Auto-generated method stub
		return allEmpPojo;
	}

	@Override
	public EmployeePojo getEmployee(Integer eId) {
		// TODO Auto-generated method stub
		EmployeePojo empPojo = null;
		Optional<EmployeeEntity> optional = empDao.findById(eId);
		if(optional.isPresent()) {
			EmployeeEntity empEntity = optional.get();
			empPojo = new EmployeePojo(empEntity.geteId(),empEntity.geteName(),empEntity.geteSalary());
		}
		else {
			throw new EmployeeNotFoundEception(eId);
		}
		return empPojo;
	}

	@Override
	public void deleteEmployee(Integer eId) {
		// TODO Auto-generated method stub
		empDao.deleteById(eId);
		
	}

	@Override
	public EmployeePojo addEmployee(EmployeePojo empPojo) {
		// TODO Auto-generated method stub
		EmployeeEntity empEntity= new EmployeeEntity(empPojo.geteId(),empPojo.geteName(),empPojo.geteSalary());
		empEntity=empDao.saveAndFlush(empEntity);
		empPojo.seteId(empEntity.geteId());
		return empPojo;
	}

	@Override
	public EmployeePojo updateEmployee(EmployeePojo empPojo) {
		// TODO Auto-generated method stub
		EmployeeEntity empEntity= new EmployeeEntity(empPojo.geteId(),empPojo.geteName(),empPojo.geteSalary());
		empDao.save(empEntity);
		return empPojo;
	}

}
