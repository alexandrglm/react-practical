import { useState, useCallback, useEffect, useContext } from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { ItemsContext } from './context/items.context';

function App () {
  const [items, setItems] = useState([]);
  const {itemApi} = useContext(ItemsContext)

  useEffect(()=> {
    setItems(itemApi.read())
  }, [items])

  const handleCreate = useCallback((item) => {
    setItems(itemApi.create(item));
  }, [items]);

  const handleDelete = useCallback((id) => {
    setItems(itemApi.remove(id));
  }, [items]);

  const handleUpdate = useCallback((item) => {
    setItems(itemApi.update(item));
  }, [items]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Billy</h1>
        <div className="app-logo">Billy &#x1f4b5;</div>
        <ItemForm handleSubmit={handleCreate} />
        <ItemList items={items} 
          handleDelete={handleDelete} 
          handleUpdate={handleUpdate}
          itemApi={itemApi}
        />
      </header>
    </div>
  );
}

export default App;
