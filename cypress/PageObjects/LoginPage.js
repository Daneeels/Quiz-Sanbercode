class Login {
    
    //Locators
    txtUsername = "input[name='username']";
    txtPassword = "input[name='password']";
    btnSubmit = "button[type='submit']";
    lblError = ".oxd-alert--error";
    

    //Login Action
    actionLogin(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('orangeLogin').then((data) => {

            cy.wait(1000);
            this.setUsername(data.username);
            this.setPassword(data.password);
            this.clickLoginButton();

        })
    }

    //Data Inputs
    setUsername(usernameData){
        cy.get(this.txtUsername).type(usernameData);
    }

    setPassword(passwordData){
        cy.get(this.txtPassword).type(passwordData);
    }

    clickLoginButton(){
        cy.get(this.btnSubmit).click();
    }

    //Assertions
    assertPositive(){
        cy.url().should('include', '/dashboard');
    }

    assertNegative(){
        cy.get(this.lblError).should('be.visible').and('contain', 'Invalid credentials')
    }

}

export default Login;