import { faker } from "@faker-js/faker"

export class SignupPage{
    constructor(){
        this.radioBtn = "input[id='id_gender1']"
        this.inputPassword = "input[data-qa='password']"
        this.selectDays = "select[data-qa='days']"
        this.selectMonth = "select[data-qa='months']"
        this.selectYear = "select[data-qa='years']"

        this.firstName = "input[data-qa='first_name']"
        this.lastName = "input[data-qa='last_name']"
        this.address = "input[data-qa='address']"
        this.country = "select[data-qa='country']"
        this.state = "input[data-qa='state']"
        this.city = "input[data-qa='city']"
        this.zipcode = "input[data-qa='zipcode']"
        this.mobile = "input[data-qa='mobile_number']"

        this.submitBtn = "button[data-qa='create-account']"

        this.h2AccountCreated = "h2[data-qa='account-created']"

        this.viewCartLink = "a[href='/view_cart']:contains(' Cart')"
    }

    verifyPageLoad(){
        cy.get(this.radioBtn).should('be.visible')
        cy.get(this.inputPassword).should('be.visible')
    }

    fillAccountInformation(){
        const fakePassword = faker.internet.password()
        const fakeDay = faker.number.int({min: 1, max: 29})
        const fakeMonth = faker.number.int({min: 1, max: 12})
        cy.get(this.radioBtn)
            .click()
        cy.get(this.inputPassword)
            .type(fakePassword)
        cy.get(this.selectDays)
            .select(fakeDay)
        cy.get(this.selectMonth)
            .select(fakeMonth)
        cy.get(this.selectYear)
            .select('2000')
    }

    fillAddressInformation(){
        const fakeName = faker.person.firstName()
        const fakeLastName = faker.person.lastName()
        const fakeAddress = faker.location.streetAddress()
        const fakeState = faker.location.state()
        const fakeCity = faker.location.city()
        const fakeZipcode = faker.location.zipCode()
        const fakeNumber = faker.phone.number()
        cy.get(this.firstName)
            .type(fakeName)
        cy.get(this.lastName)
            .type(fakeLastName)
        cy.get(this.address)
            .type(fakeAddress)
        cy.get(this.country)
            .select('United States')
        cy.get(this.state)
            .type(fakeState)
        cy.get(this.city)
            .type(fakeCity)
        cy.get(this.zipcode)
            .type(fakeZipcode)
        cy.get(this.mobile)
            .type(fakeNumber)
    }

    clickSubmit(){
        cy.get(this.submitBtn).click()
    }

    verifyAccountCreated(){
        cy.get(this.h2AccountCreated).should('be.visible')
    }

    goToCart(){
        cy.get(this.viewCartLink).click()
    }
}
export const signupPage = new SignupPage()