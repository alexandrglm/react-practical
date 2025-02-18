import './Total.css';

export default function Total ({items}) {
    const calculateTotal = items.reduce(
        (accumulator, item) =>  { 
            console.log(item, +item.price * (1 + (+item.tax/100)) * +item.qty,accumulator + (+item.price * (1 + (+item.tax/100)) * +item.qty))
            return accumulator + (+item.price * (1 + (+item.tax/100)) * +item.qty)
        },
        0
    );

    return (<div className="total-item">
            <div className="item-list-count">Items: {items.length}</div>
            <div className='bill-total'>{calculateTotal.toFixed(2)}</div>
        </div>
    )
}