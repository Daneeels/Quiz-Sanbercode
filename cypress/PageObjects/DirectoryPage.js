class Directory {
    
    //Locators
    menuDirectory = ".oxd-text.oxd-text--span.oxd-main-menu-item--name"
    txtEmployeeName = "input[placeholder='Type for hints...']"
    txtJobTitle = ".oxd-grid-3 > div:nth-of-type(2) .oxd-select-text-input"
    txtLocation = ".oxd-grid-3 > div:nth-of-type(3) .oxd-select-text-input"
    dataInput = ".oxd-select-option"
    btnSearch = "button[type='submit']"

    employeeCards = ".oxd-sheet"

    //Data Inputs
    enterDirectory(){
        cy.get(this.menuDirectory).contains('Directory').click()
    }

    setEmployeeName(employeeName){
        cy.get(this.txtEmployeeName).type(employeeName);
        // cy.get(this.txtEmployeeName).type(`{enter}`); Accessing parts of keyboard
    }

    setJobTitle(jobTitle){
        cy.get(this.txtJobTitle).click();
        cy.get(this.dataInput).contains(jobTitle).click();
    }

    setLocation(location){
        cy.get(this.txtLocation).click();
        cy.get(this.dataInput).contains(location).click();
    }

    clickSearchButton(){
        cy.get(this.btnSearch).contains(' Search ').click();
    }

    //Assertions
    assertDirPossitive(){

        cy.fixture('orangeDirectory').then((data) => {

            cy.get(this.employeeCards).within(() => {
                cy.contains(data.employeeName).should('exist');
                cy.contains(data.jobTitle).should('exist');
                cy.contains(data.location).should('exist');
            });
            
        })
        
    }
}

export default Directory;