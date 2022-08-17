$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Automation.feature");
formatter.feature({
  "line": 1,
  "name": "Puchase dresses in Automation pratice Application",
  "description": "",
  "id": "puchase-dresses-in-automation-pratice-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Home page",
  "description": "",
  "id": "puchase-dresses-in-automation-pratice-application;home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username In  Username Field \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the Password In Password Field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click the Signin Button And it navigates to My Account-My Store",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "puchase-dresses-in-automation-pratice-application;home-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "puchase-dresses-in-automation-pratice-application;home-page;;1"
    },
    {
      "cells": [
        "anurag@6875.com",
        "Anurag@12457"
      ],
      "line": 10,
      "id": "puchase-dresses-in-automation-pratice-application;home-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Home page",
  "description": "",
  "id": "puchase-dresses-in-automation-pratice-application;home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username In  Username Field \"anurag@6875.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the Password In Password Field \"Anurag@12457\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click the Signin Button And it navigates to My Account-My Store",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launch_The_Application()"
});
formatter.result({
  "duration": 22021134100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anurag@6875.com",
      "offset": 44
    }
  ],
  "location": "Step_Definition_Automation.user_Enter_The_Username_In_Username_Field(String)"
});
formatter.result({
  "duration": 5569938400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anurag@12457",
      "offset": 43
    }
  ],
  "location": "Step_Definition_Automation.user_Enter_the_Password_In_Password_Field(String)"
});
formatter.result({
  "duration": 347725600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_the_Signin_Button_And_it_navigates_to_My_Account_My_Store()"
});
formatter.result({
  "duration": 4578904100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Dresses Option Category is Casual Dresses",
  "description": "",
  "id": "puchase-dresses-in-automation-pratice-application;dresses-option-category-is-casual-dresses",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Casusl_Dress"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user Move\tTo The Dresses Option For Click The Dresses Category",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user Click On The Casual Dresses Category In Dresses Option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Click On The Casual Dress Image",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Move To The Quantity Option In Casual Dress",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click To the Plus button To Increses The Quantity  In Casual Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Click To The Size Dropdown box It Shows Size Catergries Choose The Suitable Size  In Casual Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Click To  the Colour  In Casual Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Click To The Add Cart Button In Casual Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Click To The Proceed To Checkout Button In Product page Of That Top Category",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click To The Proceed To Checkout Button In Shopping-Cart Summary Page Of That Top Category",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Click To The Proceed To Checkout Button In Address Page Of That Top Category",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Click To The Agreed Tearms And Conditions Ratio Buttton In Address Page Of That Top Category",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Click To The Proceed To Checkout Button In Shipping Page Of That Top Category",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Click To The Pay By BankWire  Button In Please Choose Your Payment Method Page Of That Top Category",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Click To The I Confirm My Order Button In Order Summary Page Of That Top Category",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Move_To_The_Dresses_Option_For_Click_The_Dresses_Category()"
});
formatter.result({
  "duration": 465682400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Casual_Dresses_Category_In_Dresses_Option()"
});
formatter.result({
  "duration": 4859897700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Casual_Dress_Image()"
});
formatter.result({
  "duration": 503892300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Move_To_The_Quantity_Option_In_Casual_Dress()"
});
formatter.result({
  "duration": 2989401700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Plus_button_To_Increses_The_Quantity_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 365554100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Size_Dropdown_box_It_Shows_Size_Catergries_Choose_The_Suitable_Size_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 897517900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Colour_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 241942400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Add_Cart_Button_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 184079700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Product_page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 3685849600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Shopping_Cart_Summary_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 2195684100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Address_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 2043132000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Agreed_Tearms_And_Conditions_Ratio_Buttton_In_Address_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 140595100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Shipping_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 2726646300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Pay_By_BankWire_Button_In_Please_Choose_Your_Payment_Method_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 1666299500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_I_Confirm_My_Order_Button_In_Order_Summary_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 3450444500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Dresses Option catergies in Evening Dresses",
  "description": "",
  "id": "puchase-dresses-in-automation-pratice-application;dresses-option-catergies-in-evening-dresses",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Evening_Dress"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user Move\tTo The Dresses Option For Click The Dresses Category",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Click On The Evening  Dresses Category In Dresses Option",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Click On The Evening Dress Image  In Evening Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Move To The Quantity Option  In Evening Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Click To the Plus button To Increses The Quantity Of The Dress In Evening Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Click To The Size Dropdown box It Shows Size Catergries Choose The Suitable Size Of Evening Dresss",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Click To  the Colour Of The Evening  Dresss",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Click To The Add Cart Button  In Evening Dresses Category",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Click To The Proceed To Checkout Button In Product page Of That Top Category1",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Click To The Proceed To Checkout Button In Shopping-Cart Summary Page Of That Top Category1",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Click To The Proceed To Checkout Button In Address Page Of That Top Category1",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Click To The Agreed Tearms And Conditions Ratio Buttton In Address Page Of That Top Category1",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Click To The Proceed To Checkout Button In Shipping Page Of That Top Category1",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Click To The Pay By BankWire  Button In Please Choose Your Payment Method Page Of That Top Category1",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user Click To The I Confirm My Order Button In Order Summary Page Of That Top Category1",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Move_To_The_Dresses_Option_For_Click_The_Dresses_Category()"
});
formatter.result({
  "duration": 185386400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Evening_Dresses_Category_In_Dresses_Option()"
});
formatter.result({
  "duration": 3141146800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Evening_Dress_Image_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 227489900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Move_To_The_Quantity_Option_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 2559367600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Plus_button_To_Increses_The_Quantity_Of_The_Dress_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 327064200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Size_Dropdown_box_It_Shows_Size_Catergries_Choose_The_Suitable_Size_Of_Evening_Dresss()"
});
formatter.result({
  "duration": 256012900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Colour_Of_The_Evening_Dresss()"
});
formatter.result({
  "duration": 235991200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Add_Cart_Button_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 189205200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 81
    }
  ],
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Product_page_Of_That_Top_Category(int)"
});
formatter.result({
  "duration": 3217007100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 95
    }
  ],
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Shopping_Cart_Summary_Page_Of_That_Top_Category(int)"
});
formatter.result({
  "duration": 1834993100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 81
    }
  ],
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Address_Page_Of_That_Top_Category(int)"
});
formatter.result({
  "duration": 1537727100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 97
    }
  ],
  "location": "Step_Definition_Automation.user_Click_To_The_Agreed_Tearms_And_Conditions_Ratio_Buttton_In_Address_Page_Of_That_Top_Category(int)"
});
formatter.result({
  "duration": 108269400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 82
    }
  ],
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Shipping_Page_Of_That_Top_Category(int)"
});
formatter.result({
  "duration": 2693130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 104
    }
  ],
  "location": "Step_Definition_Automation.user_Click_To_The_Pay_By_BankWire_Button_In_Please_Choose_Your_Payment_Method_Page_Of_That_Top_Category(int)"
});
formatter.result({
  "duration": 1438572600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 86
    }
  ],
  "location": "Step_Definition_Automation.user_Click_To_The_I_Confirm_My_Order_Button_In_Order_Summary_Page_Of_That_Top_Category(int)"
});
formatter.result({
  "duration": 4144271300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Back to Order",
  "description": "",
  "id": "puchase-dresses-in-automation-pratice-application;back-to-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@Back_To_Order"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user Click To The Back to Order Button In Order Confirmation Page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Back_to_Order_Button_In_Order_Confirmation_Page()"
});
formatter.result({
  "duration": 5122914500,
  "status": "passed"
});
});