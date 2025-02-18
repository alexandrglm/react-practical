

function Customer ({name, ...other}) {
      return <div className="Customer">
            <ul>
                <li><b>Id: </b>{other.id}</li>
                <li><b>Name: </b>{name}</li>
                <li><b>Email: </b>{other.email}</li>
            </ul>
        </div>;
  }
  
  export default Customer;