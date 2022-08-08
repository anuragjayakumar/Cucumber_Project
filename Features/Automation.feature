Feature: Puchase dresses in Automation pratice Application 
@login
Scenario Outline: Home page 
	Given user Launch The Application 
	When user Enter The Username In  Username Field "<username>"
	And user Enter the Password In Password Field "<password>"
	Then user Click the Signin Button And it navigates to My Account-My Store 
Examples:
 |username| password|
          |anurag@6875.com|Anurag@12457|

@Casusl_Dress	
Scenario: Dresses Option Category is Casual Dresses
	When user Move	To The Dresses Option For Click The Dresses Category 
	And user Click On The Casual Dresses Category In Dresses Option 
	And user Click On The Casual Dress Image 
	And user Move To The Quantity Option In Casual Dress 
	And user Click To the Plus button To Increses The Quantity  In Casual Dresses Category
	And user Click To The Size Dropdown box It Shows Size Catergries Choose The Suitable Size  In Casual Dresses Category
	And user Click To  the Colour  In Casual Dresses Category
	And user Click To The Add Cart Button In Casual Dresses Category
	And user Click To The Proceed To Checkout Button In Product page Of That Top Category 
	And user Click To The Proceed To Checkout Button In Shopping-Cart Summary Page Of That Top Category 
	And user Click To The Proceed To Checkout Button In Address Page Of That Top Category 
	And user Click To The Agreed Tearms And Conditions Ratio Buttton In Address Page Of That Top Category 
	And user Click To The Proceed To Checkout Button In Shipping Page Of That Top Category 
	And user Click To The Pay By BankWire  Button In Please Choose Your Payment Method Page Of That Top Category 
	Then user Click To The I Confirm My Order Button In Order Summary Page Of That Top Category 
	
	
@Evening_Dress	
Scenario: Dresses Option catergies in Evening Dresses 
	When user Move	To The Dresses Option For Click The Dresses Category 
	And user Click On The Evening  Dresses Category In Dresses Option 
	And user Click On The Evening Dress Image  In Evening Dresses Category
	And user Move To The Quantity Option  In Evening Dresses Category
	And user Click To the Plus button To Increses The Quantity Of The Dress In Evening Dresses Category
	And user Click To The Size Dropdown box It Shows Size Catergries Choose The Suitable Size Of Evening Dresss 
	And user Click To  the Colour Of The Evening  Dresss 
	And user Click To The Add Cart Button  In Evening Dresses Category 
	And user Click To The Proceed To Checkout Button In Product page Of That Top Category1
	And user Click To The Proceed To Checkout Button In Shopping-Cart Summary Page Of That Top Category1 
	And user Click To The Proceed To Checkout Button In Address Page Of That Top Category1 
	And user Click To The Agreed Tearms And Conditions Ratio Buttton In Address Page Of That Top Category1 
	And user Click To The Proceed To Checkout Button In Shipping Page Of That Top Category1 
	And user Click To The Pay By BankWire  Button In Please Choose Your Payment Method Page Of That Top Category1 
	Then user Click To The I Confirm My Order Button In Order Summary Page Of That Top Category1 
@Back_To_Order
Scenario: Back to Order
    When user Click To The Back to Order Button In Order Confirmation Page 	
	
	
		
	
	
	
