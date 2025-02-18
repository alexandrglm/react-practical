import { useState } from "react";
import ItemForm from "./ItemForm";
import './Item.css';

export default function Item (props) {
    const [edit, setEdit] = useState(false);
    const {number, item, handleUpdate, handleDelete} = props;

    const handleEdit = () => { setEdit(true); };
    const save = (updatedItem) => {
        handleUpdate(updatedItem);
        setEdit(false);
    };
    const deleteItem = () => { handleDelete(item.id); };

    const setItem = (event) => {
       // setItemValue(event.target.value);
    };

    return (
        edit ?
            <div>
                <ItemForm handleSubmit={save} id={item.id}/>
            </div>
            :
        <div className="bill-item" id={`item-${item.id}`}>
            <div>{number}</div>
            <div>{item.description}</div>
            <div>{item.tax}</div>
            <div>{item.price}</div>
            <div>{item.qty}</div>
            <div><label htmlFor="price">Price</label></div>
            <div className="item-controls">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}