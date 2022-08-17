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
  "duration": 43767628500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unexpected command response\n  (Session info: chrome\u003d104.0.5112.80)\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027DESKTOP-6BOD738\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9d4cb1d70b949712fb5f8b02336f56f6, clickElement {id\u003d262fbe9b-8400-4e20-9a9f-b11a3fb6dd04}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.80, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\MANOJK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53644}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53644/devtoo..., se:cdpVersion: 104.0.5112.80, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (9d4cb1d70b949712fb5f8b02336f56f6)] -\u003e xpath: //a[@class\u003d\u0027login\u0027]]\nSession ID: 9d4cb1d70b949712fb5f8b02336f56f6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.utility.files.Utility_files.click(Utility_files.java:49)\r\n\tat com.stepdef.demo.Step_Definition_Automation.user_Launch_The_Application(Step_Definition_Automation.java:19)\r\n\tat ✽.Given user Launch The Application(./Features/Automation.feature:4)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_the_Signin_Button_And_it_navigates_to_My_Account_My_Store()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2529738200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Casual_Dresses_Category_In_Dresses_Option()"
});
formatter.result({
  "duration": 7106230200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Casual_Dress_Image()"
});
formatter.result({
  "duration": 749926900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Move_To_The_Quantity_Option_In_Casual_Dress()"
});
formatter.result({
  "duration": 5569808800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Plus_button_To_Increses_The_Quantity_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 1416867300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Size_Dropdown_box_It_Shows_Size_Catergries_Choose_The_Suitable_Size_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 1712440300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Colour_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 221988400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Add_Cart_Button_In_Casual_Dresses_Category()"
});
formatter.result({
  "duration": 176155000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Product_page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 11084504000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Shopping_Cart_Summary_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 10285849700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Address_Page_Of_That_Top_Category()"
});
formatter.result({
  "duration": 10126254700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@name\u003d\u0027processAddress\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.80)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027DESKTOP-6BOD738\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9d4cb1d70b949712fb5f8b02336f56f6, findElement {using\u003dxpath, value\u003d//button[@name\u003d\u0027processAddress\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.80, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\MANOJK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53644}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53644/devtoo..., se:cdpVersion: 104.0.5112.80, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9d4cb1d70b949712fb5f8b02336f56f6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.utility.files.Utility_files.click(Utility_files.java:49)\r\n\tat com.stepdef.demo.Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Address_Page_Of_That_Top_Category(Step_Definition_Automation.java:92)\r\n\tat ✽.And user Click To The Proceed To Checkout Button In Address Page Of That Top Category(./Features/Automation.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Agreed_Tearms_And_Conditions_Ratio_Buttton_In_Address_Page_Of_That_Top_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Shipping_Page_Of_That_Top_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Pay_By_BankWire_Button_In_Please_Choose_Your_Payment_Method_Page_Of_That_Top_Category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_I_Confirm_My_Order_Button_In_Order_Summary_Page_Of_That_Top_Category()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 171586000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Evening_Dresses_Category_In_Dresses_Option()"
});
formatter.result({
  "duration": 7862322200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_On_The_Evening_Dress_Image_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 200247800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Move_To_The_Quantity_Option_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 7866381800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Plus_button_To_Increses_The_Quantity_Of_The_Dress_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 347056000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Size_Dropdown_box_It_Shows_Size_Catergries_Choose_The_Suitable_Size_Of_Evening_Dresss()"
});
formatter.result({
  "duration": 653419300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_the_Colour_Of_The_Evening_Dresss()"
});
formatter.result({
  "duration": 1241689300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Click_To_The_Add_Cart_Button_In_Evening_Dresses_Category()"
});
formatter.result({
  "duration": 214665600,
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
  "duration": 17783495200,
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
  "duration": 14476417700,
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
  "duration": 10087374100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@name\u003d\u0027processAddress\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.80)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027DESKTOP-6BOD738\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9d4cb1d70b949712fb5f8b02336f56f6, findElement {using\u003dxpath, value\u003d//button[@name\u003d\u0027processAddress\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.80, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\MANOJK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53644}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53644/devtoo..., se:cdpVersion: 104.0.5112.80, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9d4cb1d70b949712fb5f8b02336f56f6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.utility.files.Utility_files.click(Utility_files.java:49)\r\n\tat com.stepdef.demo.Step_Definition_Automation.user_Click_To_The_Proceed_To_Checkout_Button_In_Address_Page_Of_That_Top_Category(Step_Definition_Automation.java:166)\r\n\tat ✽.And user Click To The Proceed To Checkout Button In Address Page Of That Top Category1(./Features/Automation.feature:43)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 10030580400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027button-exclusive btn btn-default\u0027]\"}\n  (Session info: chrome\u003d104.0.5112.80)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027DESKTOP-6BOD738\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9d4cb1d70b949712fb5f8b02336f56f6, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027button-exclusive btn btn-default\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.80, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\MANOJK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53644}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53644/devtoo..., se:cdpVersion: 104.0.5112.80, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9d4cb1d70b949712fb5f8b02336f56f6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.utility.files.Utility_files.click(Utility_files.java:49)\r\n\tat com.stepdef.demo.Step_Definition_Automation.user_Click_To_The_Back_to_Order_Button_In_Order_Confirmation_Page(Step_Definition_Automation.java:191)\r\n\tat ✽.When user Click To The Back to Order Button In Order Confirmation Page(./Features/Automation.feature:50)\r\n",
  "status": "failed"
});
});