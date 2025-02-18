import useQuote from "./useQuote";
import useCat from "./useCat";
import "./App.css";

function App () {
  const quote = useQuote();
  const cat = useCat('or');

  return (
    <div>
        <h1>Random Cat and Quote</h1>
        {cat}
        <div>
          <div><i>{quote.quote}</i></div>
          <div>{quote.author}</div>
        </div>
    </div>
  );
}

export default App;