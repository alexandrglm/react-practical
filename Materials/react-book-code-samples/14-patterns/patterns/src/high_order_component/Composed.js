import { useState } from "react";
import customers from "../customers.json";

const Composed = (Component) => {
  const [data, setDate] = useState(customers)
  return (props) => <Component data={data} {...props} />;
};

export default Composed;