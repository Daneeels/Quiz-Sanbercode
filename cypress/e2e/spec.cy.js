import Directory from "../PageObjects/DirectoryPage";
import Login from "../PageObjects/LoginPage"
import ForgotPass from "../PageObjects/ForgotPassPage"

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

    //Tugas Akhir
    //((((((Login))))))

    //Tugas 17 Sanbercode
    //Test Scripts With POM
    const logins = new Login();

    //Passed
    it('TC - A01 (username BENAR & password BENAR)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeLogin').then((data) => {

            logins.setUsername(data.username);
            logins.setPassword(data.password);
            logins.clickLoginButton();

            logins.assertPositive();

        })
    })

    //Passed
    it('TC - A02 (username SALAH & password SALAH)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeLogin').then((data) => {

            logins.setUsername("yayan");
            logins.setPassword("0987");
            logins.clickLoginButton();

            logins.assertNegative();

        })

    })

    //Passed
    it('TC - A03 (username BENAR & password SALAH)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeLogin').then((data) => {

            logins.setUsername(data.username);
            logins.setPassword("0987");
            logins.clickLoginButton();

            logins.assertNegative();

        })

    })

    //Passed
    it('TC - A04 (username SALAH & password BENAR)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('orangeLogin').then((data) => {

            logins.setUsername("yayan");
            logins.setPassword(data.password);
            logins.clickLoginButton();

            logins.assertNegative();

        })

    })

    //((((((Forgot Password))))))

    const forgots = new ForgotPass();

    //Passed
    it('TC - B01 (Forgot password dengan username BENAR)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        forgots.enterForgotPass();

        cy.fixture('orangeLogin').then((data) => {

            forgots.setUsername(data.username);
            forgots.clickResetButton();

            forgots.assertForgotPositive();
        })
        
        
    })

    //NOT Passed (Forgot password masih bisa dilakukan bahkan dengan username yang salah)
    it('TC - B02 (Forgot password dengan username SALAH)', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        forgots.enterForgotPass();

        forgots.setUsername("ayamCrispy11");
        forgots.clickResetButton();

        forgots.assertForgotNegative();

    })

    //((((((Directory))))))
    const dirs = new Directory();

    //NOT Passed (Data karyawans sudah benar namun tidak dapat ditemukan)
    it('TC - C01 (Search seorang karyawan pada directory (Dengan Mengetik Full Name))', () =>{


        logins.actionLogin();

        dirs.enterDirectory();

        cy.fixture('orangeDirectory').then((data) => {

            dirs.setEmployeeName(data.employeeName);
            dirs.setJobTitle(data.jobTitle);
            dirs.setLocation(data.location);

            dirs.clickSearchButton();

            dirs.assertDirPossitive()
        })
        
    })

    it('TC - C01 - Solution (Search seorang karyawan pada directory (Hanya mengetik first name))', () =>{


        logins.actionLogin();

        dirs.enterDirectory();

        cy.fixture('orangeDirectory').then((data) => {

            dirs.setEmployeeName("Peter");
            cy.wait(2000);
            cy.get(dirs.txtEmployeeName).type("{downarrow}{enter}");
            dirs.setJobTitle(data.jobTitle);
            dirs.setLocation(data.location);

            dirs.clickSearchButton();

            dirs.assertDirPossitive()
        })
        
    })

})