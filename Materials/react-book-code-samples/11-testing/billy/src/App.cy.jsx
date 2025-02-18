import React, { useContext } from 'react'
import App from './App'
import { ItemProvider } from './context/items.context';

describe('<App />', () => {
  it('renders', () => {
    cy.mount(
      <ItemProvider>
        <App />
      </ItemProvider>
    )
  })
})