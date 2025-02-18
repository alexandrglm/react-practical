import React from 'react'
import ItemForm from './ItemForm'

describe('<ItemForm />', () => {
  it('renders', () => {
    const props = {
      id: null, handleSubmit: () => void 0,
    };
    cy.mount(<ItemForm {...props}/>)
  })
})