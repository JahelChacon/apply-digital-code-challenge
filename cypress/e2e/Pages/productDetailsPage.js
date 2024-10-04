const { faker } = require("@faker-js/faker")
export class ProductDetails{
    constructor(){
        this.inputQuantity = "input[id='quantity']"
        this.addToCartBtn = "button.cart:contains('Add to cart')"
        this.viewCartLink = "a[href='/view_cart']:contains('View Cart')"
    }

    verifyPageLoad(){
        cy.get(this.inputQuantity).should('be.visible')
    }

    fillQuantity(){
        const fakeNumber = faker.number.int({min: 1, max: 20})
        cy.get(this.inputQuantity)
            .clear()
            .type(fakeNumber)
    }

    addToCart(){
        cy.get(this.addToCartBtn)  
            .click()
    }

    viewCart(){
        cy.get(this.viewCartLink)
            .click()
    }
}
export const productDetails = new ProductDetails()