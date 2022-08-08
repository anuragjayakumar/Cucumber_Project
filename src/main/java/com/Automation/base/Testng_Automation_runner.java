package com.Automation.base;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

import com.helper.files.Pg_obj_man_Automation;
import com.utility.files.Utility_files;

public class Testng_Automation_runner extends Utility_files {
	public static WebDriver driver;
	public static Pg_obj_man_Automation manager;
	public static Logger log ;
	
	
	@Test(priority = -19)
	private void browser_Launch() {
	driver = Utility_files.browser_lancher("chrome");
	
	}
	@Test(priority = -18)
	private void object_Manager() {
	manager = new Pg_obj_man_Automation(driver);
	log= Logger.getLogger(getClass());
	BasicConfigurator.configure();

	}
	@Test(priority = -17)
	private void lanuch_URL() throws InterruptedException {
		get_url("http://automationpractice.com/index.php");
		Thread.sleep(2000);

	}
	@Test(priority = -16)
	private void login_process() {
		click(manager.getHome().getSign_in_button());
		sentKeys(manager.getLogin().getEmail(),"anurag@6875.com");
		sentKeys(manager.getLogin().getPassword(),"Anurag@12457");
		click(manager.getLogin().getSubmit_Btn());
		implicit_Wait(driver, 10);
		log.info("login");
	
	}@Test(priority = -15)
	private void casual_Dress() {
		actions_move_to_element(manager.getSelect().getDresses());
		actions_move_to_element(manager.getSelect().getCasual_dresses());
		click(manager.getSelect().getCasual_dresses());
		click(manager.getSelect().getImage());
		switch_To_Frame(manager.getSelect().getFrame());
		click(manager.getSelect().getQuantity());
		drop_Down(manager.getSelect().getSize(),"by index", "1");
		click(manager.getSelect().getColour());
		click(manager.getSelect().getAdd_to_cart());
		switch_to_default_content(null);
		implicit_Wait(driver, 10);
		click(manager.getCheckout().getProceed_to_checkout());
		log.info("casual");

	}
	@Test(priority = -14)
	private void evening_Dress() {
		actions_move_to_element(manager.getEve().getDresses());
		actions_click(manager.getEve().getEvening_dress());
		click(manager.getEve().getImage());
		switch_To_Frame(manager.getEve().getFrame());
		click(manager.getEve().getQuantity());
		drop_Down(manager.getEve().getSize(),"by index","2");
		click(manager.getEve().getColor());
		click(manager.getEve().getAdd_to_cart());
		switch_to_default_content(null);
		implicit_Wait(driver, 10);
		click(manager.getCheckout().getProceed_to_checkout());
		implicit_Wait(driver, 10);

	}
	@Test(priority = -5)
	private void checkout_Process() {
		click(manager.getSummary().getProceed_to_checkout());
		click(manager.getAddress().getProceed_to_checkout());
		click(manager.getShip().getAccept_terms_and_con());
		click(manager.getShip().getProceed_to_checkout());
		implicit_Wait(driver, 10);

	}
	
	@Test(priority = 1)
	private void confirm_payment() {
		click(manager.getPay().getPay_by_bank());
		implicit_Wait(driver, 10);
		click(manager.getPay().getI_conform_my_order());
		click(manager.getPay().getBack_to_order());


	}

	}
	
	
	
	
	

	
		
		
		
		



