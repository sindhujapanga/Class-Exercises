package com.abc.employee.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.abc.employee.dao.entity.EmployeeEntity;
@Repository

public interface EmployeeDao extends JpaRepository<EmployeeEntity , Integer>{

}
