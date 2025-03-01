import { createServer } from "miragejs"
import players from './players.json';

export default function () {
  createServer({
    routes() {
      this.get("/player", () => (players))

      this.post("/player", (schema, request) => {
        let { name, number, position } = JSON.parse(request.requestBody)

        const player = {id: Math.round(Math.random() * 10000), name, number, position };
        players.push(player)

        return player;
      })

      this.put('/player/:id', (schema, request) => {
        const id = request.params.id;
        const updatedPlayer = JSON.parse(request.requestBody)

        const filteredPlayers = players.filter( player => player.id !== updatedPlayer.id);
        players = [...filteredPlayers, updatedPlayer];
    
        return updatedPlayer;
      });
    
      this.del('/player/:id', (schema, request) => {

        const deletedPlayer = players.filter( player => player.id === +request.params.id)[0];
        players = players.filter( player => player.id !== request.params.id);
        console.log("Tried to delete: ", request.params, deletedPlayermore)
        return deletedPlayer;
      })
    },
  })
}