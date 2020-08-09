describe('Simple test', () => {
  it('Works', () => {
    expect(true).to.equal(true)
  })
})

describe('Home Page', () => {
  it('Visits the app', () => {
    cy.visit('/')
  })
})
