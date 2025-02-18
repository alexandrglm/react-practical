import { useState, useEffect, useContext } from 'react';
import { ItemsContext } from '../context/items.context';
import './ItemForm.css';

const initialState = {
    description: '',
    tax: 21,
    price: 0,
    qty: 0
}

export default function ItemForm (props) {
    const {handleSubmit, id} = props;
    const [item, setItem] = useState(initialState);
    const {itemApi} = useContext(ItemsContext)

    useEffect(()=> {
        if (id)
            setItem(itemApi.findById(id))
      }, [id])

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setItem({ ...item, [name]: value })
    };

    const handleSave = () => {
        if (item.description === "" || item.price === "" || item.tax === "" || item.qty === "") return;
        handleSubmit(item)
        setItem(initialState)
    }

    return (
        <div className="item-form">
            <div><label htmlFor="description">Description</label></div>
            <div><input type="text" name="description" onChange={handleChange} value={item.description} /></div>
            <div><label htmlFor="tax">Tax</label></div>
            <div><input type="text" name="tax" onChange={handleChange} value={item.tax} /></div>
            <div><label htmlFor="price">Price</label></div>
            <div><input type="text" name="price" onChange={handleChange} value={item.price} /></div>
            <div><label htmlFor="qty">Qty</label></div>
            <div><input type="number" name="qty" onChange={handleChange} value={item.qty} /></div>
            <div><button onClick={handleSave}>Save</button></div>
        </div>
    )
}
