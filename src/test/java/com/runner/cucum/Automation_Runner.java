package com.runner.cucum;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.utility.files.Utility_files;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features = ".\\Features\\Automation.feature",



                 glue = "com.stepdef.demo",
                 monochrome = true,
                 dryRun = false,
                 strict = true,
                 plugin = { "pretty", "html:target/cucumber-reports" }
                 
                 
                
                 
                 
                 
                  
		)

public class Automation_Runner{
	public static WebDriver driver;
	@BeforeClass
	public static  void setup() {
		driver= Utility_files.browser_lancher("chrome");
		
		

	}
	@AfterClass
	public static  void tear_Down() {
		driver.close();

	}

}
