export class HomePage{
    constructor(){
        this.h2FeaturesItems = "h2.title:contains('Features Items')"
        this.viewProductBtnProduct3 = "a[href='/product_details/3']"
        this.logoutLink = "a[href='/logout']:contains(' Logout')"
    }

    verifyPageLoad(){
        cy.get(this.h2FeaturesItems).should('be.visible')
    }

    clickProduct3ViewProduct(){
        cy.get(this.viewProductBtnProduct3)
            .should('be.visible')
            .click()
    }

    clickLogout(){
        cy.get(this.logoutLink).click()
    }
}
export const homePage = new HomePage()