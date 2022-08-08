package com.stepdef.demo;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.helper.files.Page_object_manager;
import com.runner.cucum.Adactin_Runner;
import com.utility.files.Utility_files;

import cucumber.api.java.en.*;
//Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;


public class Step_Definition extends Utility_files {
	public static WebDriver driver=Adactin_Runner.driver ;
	public static Page_object_manager manager = new Page_object_manager(driver);
	
	@Given("^user Launch the Application$")
	public void user_Launch_the_Application() throws Throwable {
		get_url("https://adactinhotelapp.com/");
	}

	@When("^user Enter the usename In username Field$")
	public void user_Enter_the_usename_In_username_Field() throws Throwable {
		sentKeys(manager.getHome().getUsername(),"anurag1811");
	}

	@When("^user Enter the password In password Field$")
	public void user_Enter_the_password_In_password_Field() throws Throwable {
		sentKeys(manager.getHome().getPassword(),"anurag1999");
	}

	@Then("^user Click on the Login Button And It Navigates To the \"([^\"]*)\" page$")
	public void user_Click_on_the_Login_Button_And_It_Navigates_To_the_page(String tittle) throws Throwable {
		click(manager.getHome().getLogin_button());
		
	}

	@When("^user Select the Location of the Hotel \"([^\"]*)\"$")
	public void user_Select_the_Location_of_the_Hotel(String arg1) throws Throwable {
		implicit_Wait(driver, 20);
		click(manager.getSearch().getLocation());
	}

	@When("^user Select the Hotel \"([^\"]*)\"$")
	public void user_Select_the_Hotel(String arg1) throws Throwable {
		click(manager.getSearch().getHotel());
	}

	@When("^user Select the Room Type \"([^\"]*)\"$")
	public void user_Select_the_Room_Type(String arg1) throws Throwable {
		click(manager.getSearch().getRoom_type());
	}

	@When("^user Select the Number of Rooms \"([^\"]*)\"$")
	public void user_Select_the_Number_of_Rooms(String arg1) throws Throwable {
		click(manager.getSearch().getNumber_of_rooms());
	}

	@When("^user Enter the Check In Date In Check In Date Field$")
	public void user_Enter_the_Check_In_Date_In_Check_In_Date_Field() throws Throwable {
		Thread.sleep(2000);
		click(manager.getSearch().getCheck_in_date());
		
	}

	@When("^user Enter the Check Out Date In Check Out Date Field$")
	public void user_Enter_the_Check_Out_Date_In_Check_Out_Date_Field() throws Throwable {
		click(manager.getSearch().getCheck_out_date());

	}

	@When("^user Select the Adults per Room \"([^\"]*)\"$")
	public void user_Select_the_Adults_per_Room(String arg1) throws Throwable {
		click(manager.getSearch().getAdults_per_room());
		
	}

	@When("^user Select the Children Per Room \"([^\"]*)\"$")
	public void user_Select_the_Children_Per_Room(String arg1) throws Throwable {
		click(manager.getSearch().getChildren_per_room());
	}

	@Then("^user Click On the Search Button And It Navigate To the  \"([^\"]*)\" page$")
	public void user_Click_On_the_Search_Button_And_It_Navigate_To_the_page(String arg1) throws Throwable {
		click(manager.getSearch().getSubmit_button());
	}

	@When("^user Click On the Select Ratio Button$")
	public void user_Click_On_the_Select_Ratio_Button() throws Throwable {
		click(manager.getSelect().getCheck_box());
	}

	@Then("^user Click On the Conitue Button And It Navigate To The \"([^\"]*)\" page$")
	public void user_Click_On_the_Conitue_Button_And_It_Navigate_To_The_page(String arg1) throws Throwable {
		click(manager.getSelect().getSubmit());
	}

	@When("^user Enter the Firstname In Firstname Field \"([^\"]*)\"$")
	public void user_Enter_the_Firstname_In_Firstname_Field(String arg1) throws Throwable {
		sentKeys(manager.getPayments().getFirst_Name(),"Anurag");
	}

	@When("^user Enter the Lastname In Lastname Field \"([^\"]*)\"$")
	public void user_Enter_the_Lastname_In_Lastname_Field(String arg1) throws Throwable {
		sentKeys(manager.getPayments().getLast_name(), ".j");
	}

	@When("^user Enter the Billing Address \"([^\"]*)\"$")
	public void user_Enter_the_Billing_Address(String arg1) throws Throwable {
		sentKeys(manager.getPayments().getBilling_address(),"no:12 ,porur ,chennai");
	}

	@When("^user Enter the Credit Card Number \"([^\"]*)\"$")
	public void user_Enter_the_Credit_Card_Number(String arg1) throws Throwable {
		sentKeys(manager.getPayments().getCredit_card_number(),"5001010110826662");
	}

	@When("^user Select the Credit Card Type \"([^\"]*)\"$")
	public void user_Select_the_Credit_Card_Type(String arg1) throws Throwable {
		click(manager.getPayments().getCredit_card_type());
	}

	@When("^user Select the Expiry Month \"([^\"]*)\"$")
	public void user_Select_the_Expiry_Month(String arg1) throws Throwable {
		click(manager.getPayments().getMonth());
	}

	@When("^user Select the Expiry year \"([^\"]*)\"$")
	public void user_Select_the_Expiry_year(String arg1) throws Throwable {
		click(manager.getPayments().getYear());
	}

	@When("^user Enter the CVV Number \"([^\"]*)\"$")
	public void user_Enter_the_CVV_Number(String arg1) throws Throwable {
		click(manager.getPayments().getCcv());
	}

	@Then("^user Click the Book Now Button And It Navigate To the \"([^\"]*)\"page$")
	public void user_Click_the_Book_Now_Button_And_It_Navigate_To_the_page(String arg1) throws Throwable {
		click(manager.getPayments().getBook_now());
	}
	
	
}	
	
	
	
	
	
	


	