import React from 'react'
import Item from './Item'

describe('<Item />', () => {
  it('renders', () => {
    const props = {
      number: 1,item: {}, handleUpdate: () => void 0, handleDelete: () => void 0,
    };

    cy.mount(<Item {...props}/>)
  })
})