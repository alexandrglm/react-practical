import React from 'react'
import ItemList from './ItemList'

describe('<ItemList />', () => {
  it('renders', () => {
    const props = {
      items: [], handleUpdate: () => void 0, handleDelete: () => void 0,
    };

    cy.mount(<ItemList {...props}/>)
  })
})