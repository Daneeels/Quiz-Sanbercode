class Login {
    
    txtUsername = "input[name='username']";
    txtPassword = "input[name='password']";
    btnSubmit = "button[type='submit']";
    lblError = ".oxd-alert--error";
    
    setUsername(usernameData){
        cy.get(this.txtUsername).type(usernameData);
    }

    setPassword(passwordData){
        cy.get(this.txtPassword).type(passwordData);
    }

    clickButton(){
        cy.get(this.btnSubmit).click();
    }

    assertPositive(){
        cy.url().should('include', '/dashboard');
    }

    assertNegative(){
        cy.get(this.lblError).should('be.visible').and('contain', 'Invalid credentials')
    }

}

export default Login;