import { useEffect, useState } from 'react';
import './App.css';
import Player from './Player.js';  
import PlayerForm from './PlayerForm.js'; 
import { useLazyQuery, gql } from '@apollo/client';
import useUpdatePlayer from './hooks/useUpdatePlayer.js';
import useAddPlayer from './hooks/useAddPlayer.js';
import useDeletePlayer from './hooks/useDeletePlayer.js';

const GET_PLAYERS = gql`
  query ExampleQuery {
    players {id, name, position, number }
  }
`;

function App() {
  const [getPlayers] = useLazyQuery(GET_PLAYERS);
  const createPlayer = useAddPlayer();
  const updatePlayer = useUpdatePlayer();
  const deletePlayer = useDeletePlayer();

  const [editing, setEditing] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState({name: '', number: '', position: 0});
  const [team, setTeam] = useState([]);

  useEffect(() =>{
    getPlayers().then(({ loading, error, data }) => {
      console.log(loading, error, data)
      setTeam(data.players)
    })
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
      updatePlayer({ variables: {id: player.id, name: player.name, position: +player.position, number: +player.number}}).then(({ data, loading, error }) => {
        console.log(data, loading, error)
        saveInState(data.updatePlayer);
      })
    else
      createPlayer({ variables: {name: player.name, position: +player.position, number: +player.number}}).then(({ data, loading, error }) => {
        console.log(data, loading, error)
        saveInState(data.addPlayer);
      })
  };

  const saveInState = player => {
    const filteredTeam = team.filter(member => member.position !== player.position)
    setTeam([...filteredTeam, player]);
    closeForm();
  }

  const handleDelete = player => {
    console.log("about to delete : ", player)
    deletePlayer({ variables: {id: player.id}}).then(({ data, loading, error }) => {
      console.log(data, loading, error)
      const player = data.deletePlayer;
      const filteredTeam = team.filter(member => member.position !== player.position)
      setTeam([...filteredTeam]);
      closeForm();
    })
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
