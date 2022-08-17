package com.stepdef.demo;

import java.io.IOException;

public class File_Read_Manager {
	private File_Read_Manager() {
	}
	public static  File_Read_Manager getInstanceFRM() {
		File_Read_Manager manager = new File_Read_Manager();
		 return manager;

	}
	public  Test_Data_Reader getInstantTestData() throws IOException {
		Test_Data_Reader reader = new Test_Data_Reader();
		return reader;
		

	}
	
	

}
