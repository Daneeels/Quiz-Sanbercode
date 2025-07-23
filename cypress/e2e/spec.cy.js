import Login from "../PageObjects/LoginPage"

describe('Login Test Scripts', () => {

    // Quiz Sanbercode
    /*
    //Test Scripts Without POM
    it('TC - 001 ', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get('input[name="username"]').click().type('Admin')
        cy.get('input[name="password"]').click().type('admin123')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actionSummary')

        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard');

        cy.wait('@actionSummary')
    })

    it('TC - 002 ', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get('input[name="username"]').click().type('yayan')
        cy.get('input[name="password"]').click().type('0987')

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-alert--error').should('be.visible').and('contain', 'Invalid credentials')
    })

    it('TC - 003', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get('input[name="username"]').click().type('Admin')
        cy.get('input[name="password"]').click().type('0987')

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-alert--error').should('be.visible').and('contain', 'Invalid credentials')
    })

    it('TC - 004', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get('input[name="username"]').click().type('yayan')
        cy.get('input[name="password"]').click().type('admin123')

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-alert--error').should('be.visible').and('contain', 'Invalid credentials')
    })
        */


    //Tugas 17 Sanbercode
    //Test Scripts With POM
    const logins = new Login();

    it('TC - 001 (username BENAR & password BENAR)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeHRM').then((data) => {

            logins.setUsername(data.username);
            logins.setPassword(data.password);
            logins.clickButton();

            logins.assertPositive();

        })
    })

    it('TC - 002 (username SALAH & password SALAH)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeHRM').then((data) => {

            logins.setUsername("yayan");
            logins.setPassword("0987");
            logins.clickButton();

            logins.assertNegative();

        })

    })

    it('TC - 003 (username BENAR & password SALAH)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeHRM').then((data) => {

            logins.setUsername(data.username);
            logins.setPassword("0987");
            logins.clickButton();

            logins.assertNegative();

        })

    })

    it('TC - 004 (username SALAH & password BENAR)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeHRM').then((data) => {

            logins.setUsername("yayan");
            logins.setPassword(data.password);
            logins.clickButton();

            logins.assertNegative();

        })

    })
})