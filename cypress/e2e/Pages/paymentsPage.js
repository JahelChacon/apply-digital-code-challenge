import { faker } from "@faker-js/faker"

export class PaymentsPage{
    constructor(){
        this.inputCardName = "input[data-qa='name-on-card']"
        this.inputCardNumber = "input[data-qa='card-number']"
        this.inputCVC = "input[data-qa='cvc']"
        this.inputExpiryMonth = "input[data-qa='expiry-month']"
        this.inputExpiryYear = "input[data-qa='expiry-year']"

        this.confirmOrderBtn = "button[data-qa='pay-button']"

        this.h2OrderPlaced = "h2[data-qa='order-placed']"
    }

    verifyPageLoad(){
        cy.get(this.inputCardName).should('be.visible')
        cy.get(this.inputCardNumber).should('be.visible')
        cy.get(this.inputCVC).should('be.visible')
        cy.get(this.inputExpiryMonth).should('be.visible')
        cy.get(this.inputExpiryYear).should('be.visible')
        cy.get(this.confirmOrderBtn).should('be.visible')
    }

    fillPayment(){
        const fakeCardName = faker.person.fullName()
        const fakeCardNumber = faker.finance.creditCardNumber()
        const fakeCVC = faker.finance.creditCardCVV()
        const fakeExpiryMonth = faker.number.int({min: 1, max: 12})
        const fakeExpiryYear = faker.number.int({min: 2025, max: 2028})
        cy.get(this.inputCardName)
            .type(fakeCardName)
        cy.get(this.inputCardNumber)
            .type(fakeCardNumber)
        cy.get(this.inputCVC)
            .type(fakeCVC)
        cy.get(this.inputExpiryMonth)
            .type(fakeExpiryMonth)
        cy.get(this.inputExpiryYear)
            .type(fakeExpiryYear)
    }

    clickConfirmOrder(){
        cy.get(this.confirmOrderBtn).click()
    }

    h2OrderPlacedConfirmation(){
        cy.get(this.h2OrderPlaced).should('be.visible')
    }
}
export const paymentsPage = new PaymentsPage()