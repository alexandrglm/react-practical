import React from 'react'
import Total from './Total'

describe('<Total />', () => {
  it('renders', () => {
    const items = { price: 444 };
    cy.mount(<Total items={items}/>)
  })
})