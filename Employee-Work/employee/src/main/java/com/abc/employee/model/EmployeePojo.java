package com.abc.employee.model;

public class EmployeePojo {
	private int eId;
	private String eName;
	private String eSalary;
	public EmployeePojo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EmployeePojo(int eId, String eName, String eSalary) {
		super();
		this.eId = eId;
		this.eName = eName;
		this.eSalary = eSalary;
	}
	public int geteId() {
		return eId;
	}
	public void seteId(int eId) {
		this.eId = eId;
	}
	public String geteName() {
		return eName;
	}
	public void seteName(String eName) {
		this.eName = eName;
	}
	public String geteSalary() {
		return eSalary;
	}
	public void seteSalary(String eSalary) {
		this.eSalary = eSalary;
	}

}
