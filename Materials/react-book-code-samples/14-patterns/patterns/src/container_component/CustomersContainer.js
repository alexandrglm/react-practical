import { useState } from "react";
import Customers from "../spreading_props/Customers";
import initialCustomers from "../customers.json";

const CustomersContainer  = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  return (
    <div>
      <h3>Customers</h3>
      <Customers data={customers} />
    </div>
  );
}

export default CustomersContainer;