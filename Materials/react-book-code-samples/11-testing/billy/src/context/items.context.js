import { createContext, useState } from 'react';
import ItemApi from '../api/item.api';

export const ItemsContext = createContext({
    itemApi: {},
})

const initialItems = [
    {id: 1, description: "Ice cream", tax: 21, price: 2.99, qty: 2},
    {id: 2, description: "Ham", tax: 21, price: 19.99, qty: 1},
]
export const ItemProvider = ({children}) => {
    const value = {
        itemApi: new ItemApi(initialItems)
    };

    return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}