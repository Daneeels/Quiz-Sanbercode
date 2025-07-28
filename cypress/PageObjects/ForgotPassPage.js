class ForgotPass {
    
    //Locators
    lblForgotPass = ".orangehrm-login-forgot-header"
    txtUsername = "input[name='username']";
    btnResetPass = ".oxd-button--secondary";
    lblSuccess = ".oxd-text--h6"

    //Data Inputs
    enterForgotPass(){
        cy.get(this.lblForgotPass).click();
    }

    setUsername(usernameData){
        cy.get(this.txtUsername).type(usernameData);
    }

    clickResetButton(){
        cy.get(this.btnResetPass).click();
    }

    //Assertions
    assertForgotPositive(){
        cy.get(this.lblSuccess).should('contain', 'Reset Password link sent successfully');
    }

    assertForgotNegative(){
    cy.get(this.lblSuccess).should('not.contain', 'Reset Password link sent successfully');
    }


}

export default ForgotPass;