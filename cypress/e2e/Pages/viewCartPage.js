export class ViewCartPage{
    constructor(){
        this.proceedToCheckoutBtn = "a.check_out:contains('Proceed To Checkout')"
        this.registerLoginLink = "a[href='/login']:contains('Register / Login')"
    }

    verifyPageLoad(){
        cy.get(this.proceedToCheckoutBtn).should('be.visible')
    }

    clickProceedToCheckout(){
        cy.get(this.proceedToCheckoutBtn).click()
    }

    clickRegisterLogin(){
        cy.get(this.registerLoginLink).click()
    }

}
export const viewCartPage = new ViewCartPage()