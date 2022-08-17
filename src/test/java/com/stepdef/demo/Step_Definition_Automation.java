package com.stepdef.demo;

import org.openqa.selenium.WebDriver;

import com.helper.files.Pg_obj_man_Automation;
import com.runner.cucum.Automation_Runner;
import com.utility.files.Utility_files;

import cucumber.api.java.en.*;

public class Step_Definition_Automation extends Utility_files {
	public static WebDriver driver = Automation_Runner.driver;
	public static Pg_obj_man_Automation manager = new Pg_obj_man_Automation(driver);
	
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		String Url = File_Read_Manager.getInstanceFRM().getInstantTestData().get_Url();
		get_url(Url);
		Thread.sleep(2000);
		click(manager.getHome().getSign_in_button());
	}
	@When("^user Enter The Username In  Username Field \"([^\"]*)\"$")
	public void user_Enter_The_Username_In_Username_Field(String username) throws Throwable {
		sentKeys(manager.getLogin().getEmail(),username);
	}
	@When("^user Enter the Password In Password Field \"([^\"]*)\"$")
	public void user_Enter_the_Password_In_Password_Field(String password) throws Throwable {
		sentKeys(manager.getLogin().getPassword(),password);
	}

	@Then("^user Click the Signin Button And it navigates to My Account-My Store$")
	public void user_Click_the_Signin_Button_And_it_navigates_to_My_Account_My_Store() throws Throwable {
		click(manager.getLogin().getSubmit_Btn());
		implicit_Wait(driver, 10);
	}

	@When("^user Move	To The Dresses Option For Click The Dresses Category$")
	public void user_Move_To_The_Dresses_Option_For_Click_The_Dresses_Category() throws Throwable {
		actions_move_to_element(manager.getSelect().getDresses());
	}

	@When("^user Click On The Casual Dresses Category In Dresses Option$")
	public void user_Click_On_The_Casual_Dresses_Category_In_Dresses_Option() throws Throwable {
		actions_move_to_element(manager.getSelect().getCasual_dresses());
		click(manager.getSelect().getCasual_dresses());
	}

	@When("^user Click On The Casual Dress Image$")
	public void user_Click_On_The_Casual_Dress_Image() throws Throwable {
		click(manager.getSelect().getImage());
		
	}

	@When("^user Move To The Quantity Option In Casual Dress$")
	public void user_Move_To_The_Quantity_Option_In_Casual_Dress() throws Throwable {
		switch_To_Frame(manager.getSelect().getFrame());
	}

	@When("^user Click To the Plus button To Increses The Quantity  In Casual Dresses Category$")
	public void user_Click_To_the_Plus_button_To_Increses_The_Quantity_In_Casual_Dresses_Category() throws Throwable {
		click(manager.getSelect().getQuantity());
	}

	@When("^user Click To The Size Dropdown box It Shows Size Catergries Choose The Suitable Size  In Casual Dresses Category$")
	public void user_Click_To_The_Size_Dropdown_box_It_Shows_Size_Catergries_Choose_The_Suitable_Size_In_Casual_Dresses_Category() throws Throwable {
		drop_Down(manager.getSelect().getSize(),"by index", "1");
	}

	@When("^user Click To  the Colour  In Casual Dresses Category$")
	public void user_Click_To_the_Colour_In_Casual_Dresses_Category() throws Throwable {
		click(manager.getSelect().getColour());
	}

	@When("^user Click To The Add Cart Button In Casual Dresses Category$")
	public void user_Click_To_The_Add_Cart_Button_In_Casual_Dresses_Category() throws Throwable {
		click(manager.getSelect().getAdd_to_cart());
		switch_to_default_content(null);
		implicit_Wait(driver, 10);
	}

	@When("^user Click To The Proceed To Checkout Button In Product page Of That Top Category$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Product_page_Of_That_Top_Category() throws Throwable {
		click(manager.getCheckout().getProceed_to_checkout());
	}

	@When("^user Click To The Proceed To Checkout Button In Shopping-Cart Summary Page Of That Top Category$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Shopping_Cart_Summary_Page_Of_That_Top_Category() throws Throwable {
		click(manager.getSummary().getProceed_to_checkout());
	}

	@When("^user Click To The Proceed To Checkout Button In Address Page Of That Top Category$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Address_Page_Of_That_Top_Category() throws Throwable {
		click(manager.getAddress().getProceed_to_checkout());
	}
	@When("^user Click To The Agreed Tearms And Conditions Ratio Buttton In Address Page Of That Top Category$")
	public void user_Click_To_The_Agreed_Tearms_And_Conditions_Ratio_Buttton_In_Address_Page_Of_That_Top_Category() throws Throwable {
	    click(manager.getShip().getAccept_terms_and_con());
	}

	@When("^user Click To The Proceed To Checkout Button In Shipping Page Of That Top Category$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Shipping_Page_Of_That_Top_Category() throws Throwable {
        click(manager.getShip().getProceed_to_checkout());
	}

	@When("^user Click To The Pay By BankWire  Button In Please Choose Your Payment Method Page Of That Top Category$")
	public void user_Click_To_The_Pay_By_BankWire_Button_In_Please_Choose_Your_Payment_Method_Page_Of_That_Top_Category() throws Throwable {
         click(manager.getPay().getPay_by_bank());
	}

	@Then("^user Click To The I Confirm My Order Button In Order Summary Page Of That Top Category$")
	public void user_Click_To_The_I_Confirm_My_Order_Button_In_Order_Summary_Page_Of_That_Top_Category() throws Throwable {
       click(manager.getPay().getI_conform_my_order());
	}

	
	
	@When("^user Click On The Evening  Dresses Category In Dresses Option$")
	public void user_Click_On_The_Evening_Dresses_Category_In_Dresses_Option() throws Throwable {
		actions_move_to_element(manager.getEve().getDresses());
		actions_click(manager.getEve().getEvening_dress());
	}

	@When("^user Click On The Evening Dress Image  In Evening Dresses Category$")
	public void user_Click_On_The_Evening_Dress_Image_In_Evening_Dresses_Category() throws Throwable {
		click(manager.getEve().getImage());
	}

	@When("^user Move To The Quantity Option  In Evening Dresses Category$")
	public void user_Move_To_The_Quantity_Option_In_Evening_Dresses_Category() throws Throwable {
		switch_To_Frame(manager.getEve().getFrame());
	}

	@When("^user Click To the Plus button To Increses The Quantity Of The Dress In Evening Dresses Category$")
	public void user_Click_To_the_Plus_button_To_Increses_The_Quantity_Of_The_Dress_In_Evening_Dresses_Category() throws Throwable {
		click(manager.getEve().getQuantity());
	}

	@When("^user Click To The Size Dropdown box It Shows Size Catergries Choose The Suitable Size Of Evening Dresss$")
	public void user_Click_To_The_Size_Dropdown_box_It_Shows_Size_Catergries_Choose_The_Suitable_Size_Of_Evening_Dresss() throws Throwable {
		drop_Down(manager.getEve().getSize(),"by index","2");
	}

	@When("^user Click To  the Colour Of The Evening  Dresss$")
	public void user_Click_To_the_Colour_Of_The_Evening_Dresss() throws Throwable {
		click(manager.getEve().getColor());
	}

	@When("^user Click To The Add Cart Button  In Evening Dresses Category$")
	public void user_Click_To_The_Add_Cart_Button_In_Evening_Dresses_Category() throws Throwable {
		click(manager.getEve().getAdd_to_cart());
		switch_to_default_content(null);
		implicit_Wait(driver, 10);
	}
	@When("^user Click To The Proceed To Checkout Button In Product page Of That Top Category(\\d+)$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Product_page_Of_That_Top_Category(int arg1) throws Throwable {
		click(manager.getCheckout().getProceed_to_checkout());
	}

	@When("^user Click To The Proceed To Checkout Button In Shopping-Cart Summary Page Of That Top Category(\\d+)$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Shopping_Cart_Summary_Page_Of_That_Top_Category(int arg1) throws Throwable {
		click(manager.getSummary().getProceed_to_checkout());
	}
	

	@When("^user Click To The Proceed To Checkout Button In Address Page Of That Top Category(\\d+)$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Address_Page_Of_That_Top_Category(int arg1) throws Throwable {
		click(manager.getAddress().getProceed_to_checkout());
	}

	@When("^user Click To The Agreed Tearms And Conditions Ratio Buttton In Address Page Of That Top Category(\\d+)$")
	public void user_Click_To_The_Agreed_Tearms_And_Conditions_Ratio_Buttton_In_Address_Page_Of_That_Top_Category(int arg1) throws Throwable {
		 click(manager.getShip().getAccept_terms_and_con());
	}

	@When("^user Click To The Proceed To Checkout Button In Shipping Page Of That Top Category(\\d+)$")
	public void user_Click_To_The_Proceed_To_Checkout_Button_In_Shipping_Page_Of_That_Top_Category(int arg1) throws Throwable {
		 click(manager.getShip().getProceed_to_checkout());
	}

	@When("^user Click To The Pay By BankWire  Button In Please Choose Your Payment Method Page Of That Top Category(\\d+)$")
	public void user_Click_To_The_Pay_By_BankWire_Button_In_Please_Choose_Your_Payment_Method_Page_Of_That_Top_Category(int arg1) throws Throwable {
		 click(manager.getPay().getPay_by_bank());
	}

	@Then("^user Click To The I Confirm My Order Button In Order Summary Page Of That Top Category(\\d+)$")
	public void user_Click_To_The_I_Confirm_My_Order_Button_In_Order_Summary_Page_Of_That_Top_Category(int arg1) throws Throwable {
		click(manager.getPay().getI_conform_my_order());
	}
	
	@When("^user Click To The Back to Order Button In Order Confirmation Page$")
	public void user_Click_To_The_Back_to_Order_Button_In_Order_Confirmation_Page() throws Throwable {
	click(manager.getPay().getBack_to_order());
	}


	
	

}
