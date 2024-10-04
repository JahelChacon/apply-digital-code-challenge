const { checkoutPage } = require("../Pages/checkoutPage")
const { homePage } = require("../Pages/homePage")
const { loginPage } = require("../Pages/loginPage")
const { paymentsPage } = require("../Pages/paymentsPage")
const { productDetails } = require("../Pages/productDetailsPage")
const { signupPage } = require("../Pages/signupPage")
const { viewCartPage } = require("../Pages/viewCartPage")

describe('User Flow when placing an order', () => {
    before(() => {
        // Visit the webpage
        cy.visit("/")
    })

    it('user should be able to place an order ', () => {
        // Verify page loads
        homePage.verifyPageLoad()
        // Click on product 3 view product button 
        homePage.clickProduct3ViewProduct()
        // Verify product details page loads, enter quantity from 1-20 and add to cart, then view cart 
        productDetails.verifyPageLoad()
        productDetails.fillQuantity()
        productDetails.addToCart()
        productDetails.viewCart()
        // verify cart page loads, click checkout and then go to register page 
        viewCartPage.verifyPageLoad()
        viewCartPage.clickProceedToCheckout()
        viewCartPage.clickRegisterLogin()
        // verify login loads, then complete the initial signup form and click on continue 
        loginPage.verifyPageLoad()
        loginPage.completeSignup()
        // verify signup page loads and fill all information and create the account 
        signupPage.verifyPageLoad()
        signupPage.fillAccountInformation()
        signupPage.fillAddressInformation()
        signupPage.clickSubmit()
        signupPage.verifyAccountCreated()
        // Go to cart, then checkout
        signupPage.goToCart()
        viewCartPage.clickProceedToCheckout()
        checkoutPage.clickPlaceOrder()
        // fill payment information and place the order 
        paymentsPage.verifyPageLoad()
        paymentsPage.fillPayment()
        paymentsPage.clickConfirmOrder()
        paymentsPage.h2OrderPlacedConfirmation()
        // logout 
        homePage.clickLogout()
    })
})