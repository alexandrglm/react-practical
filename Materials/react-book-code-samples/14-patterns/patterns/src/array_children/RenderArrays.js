const RenderArrays = ({customers}) =>  {
    return <div>
        { 
            customers.map( (customer, i) => 
                <div key={i}>{customer.name}</div>
            )
        }
        <div>
            {[customers.length, " customers"].map((text, i) => <span key={i}>{text}</span>)}
        </div>
    </div>;
}

export default RenderArrays;