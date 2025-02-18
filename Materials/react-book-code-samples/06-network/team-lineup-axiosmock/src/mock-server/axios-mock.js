import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import initialPlayers from './players.json';

const repopulate = (items, amount) => {
    let repopulated = items;
    Array(amount).fill(0).forEach((_,i) => {
        repopulated = repopulated.concat(items)
    })
    return repopulated.map((item, i) => ({...item, id: (i+1)}))
}
let players = repopulate(initialPlayers, 1);

const mockServer = new MockAdapter(axios);

mockServer.onGet('/player').reply(function (config) {    
    console.log("mock> GET players: ", players)
    return [200, players]
});

mockServer.onPost('/player').reply(function (config) {
    console.log("mock> POST player: ", config.data)
    let { name, number, position } = JSON.parse(config.data)

    if (name === "error") {
        return [500, {error: "La cagaste"}]
    }

    const player = {id: Math.round(Math.random() * 10000), name, number, position };
    players.push(player)

    return [200, player];
});

mockServer.onPut(/\/player\/[0-9]+/).reply(function (config) {
    console.log("mock> PUT player: ", config.data)
    const updatedPlayer = JSON.parse(config.data)

    const filteredPlayers = players.filter( player => player.id !== updatedPlayer.id);
    players = [...filteredPlayers, updatedPlayer];

    return [200, updatedPlayer];
});

mockServer.onDelete(/\/player\/[0-9]+/).reply(function (config) {
    const deletedPlayerId = +config.url.split("/").slice(-1)[0];
    console.log("mock> DELETE player: ", deletedPlayerId)
    const deletedPlayer = players.filter( player => player.id === deletedPlayerId)[0];
    players = players.filter( player => player.id !== deletedPlayerId);

    return [200, deletedPlayer];
});


export default mockServer;