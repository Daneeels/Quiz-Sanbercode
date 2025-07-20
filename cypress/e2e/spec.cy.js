describe('template spec', () => {
      it('TC - 001 ', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get('input[name="username"]').click().type('Admin')
        cy.get('input[name="password"]').click().type('admin123')

        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard');
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
})