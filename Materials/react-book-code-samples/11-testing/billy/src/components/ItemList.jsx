import './ItemList.css';
import Item from './Item';
import Total from './Total';

export default function ItemList ({items, handleDelete, handleUpdate}) {
    return (
        <div className="item-list">
            <div className="item-list-title">Item list</div>
            {items.map((item, i) => {
                return <Item key={item.id} 
                    number={i} item={item} 
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />
            })}
            <Total items={items}/>
        </div>
    )
}