
import Customer from "../destructuring_props/Customer";

const Customers = ({data}) => {
  return <div>
      {
        data.map( (customer, i) => 
            <Customer key={i} {...customer} />
        )
      }
    </div>;
}

export default Customers;