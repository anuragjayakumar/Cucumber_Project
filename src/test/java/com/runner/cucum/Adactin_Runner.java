package com.runner.cucum;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.utility.files.Utility_files;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".\\Features",
		glue = "com.stepdef.demo",
		monochrome = true,
		dryRun = false,
		strict = false,
		tags = ("@adact1,@adact2,@adact3")
		//~ ==== for exclude purpose 
		
		)

public class Adactin_Runner {
	public static WebDriver driver;
	@BeforeClass
	public static  void set_Up(){
	 driver = Utility_files.browser_lancher("chrome");

	 
	}
	@AfterClass
	public static void tear_Down() {
		driver.close();

	}
	

}
