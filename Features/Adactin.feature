Feature: Hotel booking in Adactin Application 
@adact1
Scenario: Login page 
	Given user Launch the Application 
	When user Enter the usename In username Field 
	And user Enter the password In password Field 
	Then user Click on the Login Button And It Navigates To the "Adactin.com-Search Hotel" page 
@adact1
Scenario: Search Hotel Page 
	When user Select the Location of the Hotel "London"
	And user Select the Hotel "Sunshine"
	And user Select the Room Type "Double"
	And user Select the Number of Rooms "2"
	And user Enter the Check In Date In Check In Date Field 
	And user Enter the Check Out Date In Check Out Date Field 
	And user Select the Adults per Room "2"
	And user Select the Children Per Room "0" 
	Then user Click On the Search Button And It Navigate To the  "Adactin.com-Select Hotel" page  
@adact2	
Scenario: Select Hotel page
When user Click On the Select Ratio Button
Then user Click On the Conitue Button And It Navigate To The "Adactin.com-Book A Hotel" page 
@adact3
Scenario: Select Book Hotel Page
When user Enter the Firstname In Firstname Field "Anurag"
And user Enter the Lastname In Lastname Field ".j"
And user Enter the Billing Address "no:12 ,porur ,chennai"
And user Enter the Credit Card Number "5001010110826662"
And user Select the Credit Card Type "VISA"
And user Select the Expiry Month "11"
And user Select the Expiry year "2022"
And user Enter the CVV Number "108"
Then user Click the Book Now Button And It Navigate To the "Adactin.com-Hotel Booking Confirmation"page 
