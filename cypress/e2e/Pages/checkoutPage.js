export class CheckoutPage{
    constructor(){
        this.placeOrderBtn = "a.check_out:contains('Place Order')"
    }

    clickPlaceOrder(){
        cy.get(this.placeOrderBtn)
            .should('be.visible')
            .click()
    }
}
export const checkoutPage = new CheckoutPage()