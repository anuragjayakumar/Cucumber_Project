package com.stepdef.demo;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Test_Data_Reader {
	public static Properties p ;
	
	public Test_Data_Reader() throws IOException {
		File f = new File(				
"C:\\Users\\Manojkrishnan\\eclipse-workspace_Anurag\\Cucumber_Main\\src\\test\\java\\com\\stepdef\\demo\\Test_Data.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
}
	public String get_Browser() {
		String browser = p.getProperty("browser");
		return browser;
		

	}
	public  String get_Url() {
		String url = p.getProperty("url");
		return url;

	}
		
		

	}
	
	



