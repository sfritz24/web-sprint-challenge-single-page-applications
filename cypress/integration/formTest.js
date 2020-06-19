describe('testing input and submit button', ()=>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/')
    })

    it('can navigate to the pizza form', ()=>{
        cy.get('button#pizzaBttn').click()
    })

    it('submit button should be disabled', ()=>{
        cy.get('button#submitBttn').should('be.disabled')
    })

    it('can type a name in the name box', ()=>{
        cy.get('input[name=name]').type('Shanon').should('have.value', 'Shanon')
    })

    it('submit button should still be disabled', ()=>{
        cy.get('button#submitBttn').should('be.disabled')
    })
    
    it('can select large size of pizza', ()=>{
        cy.get('select').select('large').should('have.value', 'large')
    })

    it('submit button should now be enabled', ()=>{
        cy.get('button#submitBttn').should('be.enabled')
    })

    it('should be able to select no size', ()=>{
        cy.get('select').select('')
    })

    it('error message should be displayed for size', ()=>{
        cy.get('div#sizeError').should('exist')
    })

    it('submit button should be disabled again', ()=>{
        cy.get('button#submitBttn').should('be.disabled')
    })

    it('should be able to select family size', ()=>{
        cy.get('select').select('family').should('have.value', 'family')
    })

    it('submit button should be enabled again', ()=>{
        cy.get('button#submitBttn').should('be.enabled')
    })

    it('should be able to uncheck cheese and check pepperoni and others should be false', ()=>{
        cy.get('input[name=cheese]').click().should('have.value', 'false')
        cy.get('input[name=pepperoni]').click().should('have.value', 'true')
        cy.get('input[name=mushrooms]').should('have.value', 'false')
        cy.get('input[name=onions]').should('have.value', 'false')
    })

    it('should be able to add instructions to not knock', ()=>{
        cy.get('input[name=instructions]').type(`Please don't knock on the door`).should('have.value', `Please don't knock on the door`)
    })

    it('should be able to readd cheese', ()=>{
        cy.get('input[name=cheese]').click().should('have.value', 'true')
    })

    it('should be able to submit the order', ()=>{
        cy.get('button#submitBttn').click()
    })

    it('form should have reset after hitting submit', ()=>{
        cy.get('input[name=name]').should('be.empty')
        cy.get('select').should('have.value', '')
        cy.get('input[name=cheese]').should('have.value', 'true')
        cy.get('input[name=pepperoni]').should('have.value', 'false')
        cy.get('input[name=mushrooms]').should('have.value', 'false')
        cy.get('input[name=onions]').should('have.value', 'false')
        cy.get('input[name=instructions]').should('be.empty')
    })

    it('order should be displayed', ()=>{
        cy.contains('Your pizza is being prepared').should('exist')
    })
})