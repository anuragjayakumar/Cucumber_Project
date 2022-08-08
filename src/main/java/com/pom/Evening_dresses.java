package com.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Evening_dresses {
	public static WebDriver driver;
	@FindBy(xpath = "//ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']/li/a[.='Dresses']")
    private WebElement dresses;
	@FindBy(xpath = "//ul[@class='submenu-container clearfix first-in-line-xs']/li/a[.='Evening Dresses']")
	private WebElement evening_dress;
	@FindBy(xpath = "//img[@title='Printed Dress']")
	private WebElement image ;
	@FindBy(xpath = "//iframe[@class='fancybox-iframe']")
	private WebElement frame;
	@FindBy(xpath = "//input[@id='quantity_wanted']")
	private WebElement quantity;
	@FindBy(xpath = "//select[@id='group_1']")
	private WebElement size;
	@FindBy(xpath = "//a[@name='Pink']")
	private WebElement color;
	@FindBy(xpath = "//p[@id='add_to_cart']/button/span")
	private WebElement Add_to_cart;
	
	public Evening_dresses (WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this );
		
	}

	public WebElement getDresses() {
		return dresses;
	}

	public WebElement getEvening_dress() {
		return evening_dress;
	}

	public WebElement getImage() {
		return image;
	}

	public WebElement getFrame() {
		return frame;
	}

	public WebElement getQuantity() {
		return quantity;
	}

	public WebElement getSize() {
		return size;
	}

	public WebElement getColor() {
		return color;
	}

	public WebElement getAdd_to_cart() {
		return Add_to_cart;
	}
}
