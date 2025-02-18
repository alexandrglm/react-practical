import { useEffect, useState } from 'react';
import './App.css';
import Player from './Player';  
import PlayerForm from './PlayerForm';  

const requestOptions = (method, data = {}) => ({
  method: method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})

function App() {
  const [editing, setEditing] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState({name: '', number: '', position: 0});
  const [team, setTeam] = useState([]);

  useEffect( () =>{
    fetch('http://localhost:3200')
      .then(result => result.json()).then(result  => {
        setTeam(result)
    });
  }, [])

  const changePlayer = position => {
    console.log("Change")
    setEditing(true)
    const emptyPlayer = {name: '', number: '', position}
    const player = team.filter(player => player.position === position)[0] || emptyPlayer;
    setCurrentPlayer(player)
  };

  const savePlayer = player => {
    if (player.id)
      fetch(`http://localhost:3200/player/${player.id}`, requestOptions('PUT', player))
        .then(result => result.json()).then(result => {
          saveInState(result);
      });
    else
      fetch('http://localhost:3200/player', requestOptions('POST', player))
        .then(result => result.json()).then(result => {
          saveInState(result);
      });
  };

  const saveInState = player => {
    const filteredTeam = team.filter(member => member.position !== player.position)
    setTeam([...filteredTeam, player]);
    closeForm();
  }

  const handleDelete = player => {
    fetch(`http://localhost:3200/player/${player.id}`, requestOptions('DELETE'))
      .then(result => result.json()).then(result => {
        const player = result;
        const filteredTeam = team.filter(member => member.position !== player.position)
        setTeam([...filteredTeam]);
        closeForm();
    });
  }

  const setPlayer = position => {
    const player = team.filter(player => player.position === position)[0];
    return player ? <Player player={player} /> : null;
  }

  const closeForm = () => { setEditing(false); }

  return (
    <div className="App">
      <h1>Line up</h1>
      <div className="App-field">
        <div className="App-field-row">
          <div onClick={() => changePlayer(0)}>{setPlayer(0)}</div>
        </div>
        <div className="App-field-row">
          { [1, 2, 3, 4, 5].map(n => 
            <div key={n} onClick={() => changePlayer(n)}>{setPlayer(n)}</div>
          )}
        </div>
        <div className="App-field-row">
          { [6, 7, 8, 9, 10].map(n => 
            <div key={n} onClick={() => changePlayer(n)}>{setPlayer(n)}</div>
          )}
        </div>
        <div className="App-field-row">
          { [11, 12, 13].map(n => 
            <div key={n} onClick={() => changePlayer(n)}>{setPlayer(n)}</div>
          )}
        </div>
      </div>
      {editing && <PlayerForm player={currentPlayer} 
          handleClose={closeForm} 
          handleSave={savePlayer} 
          handleDelete={handleDelete} 
        />}
    </div>
  );
}

export default App;
