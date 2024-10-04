const { faker } = require("@faker-js/faker")
export class LoginPage{
    constructor(){
        this.inputName = "input[data-qa='signup-name']"
        this.inputEmail = "input[data-qa='signup-email']"
        this.submitBtn = "button[data-qa='signup-button']"
    }

    verifyPageLoad(){
        cy.get(this.inputName).should('be.visible')
        cy.get(this.inputEmail).should('be.visible')
        cy.get(this.submitBtn).should('be.visible')
    }

    completeSignup(){
        const fakeName = faker.person.firstName()
        const fakeEmail = faker.internet.email()
        cy.get(this.inputName)
            .type(fakeName)
        cy.get(this.inputEmail)
            .type(fakeEmail)
        cy.get(this.submitBtn).click()
    }
}
export const loginPage = new LoginPage()