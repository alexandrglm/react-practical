import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Player {
    id: ID!
    name: String
    number: Int
    position: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    players: [Player]
  }

  type Mutation {
    addPlayer(name: String, position: Int, number: Int): Player!
    updatePlayer(id: ID!, name: String, position: Int, number: Int): Player
    deletePlayer(id: ID!): Player
  }
`;

const players = [
    {
        id: 1,
      name: 'Yashin',
      number: 1,
      position: 0,
    },
    {
        id: 2,
        name: 'Maldini',
      number: 4,
      position: 2,
    },
    {
        id: 3,
        name: 'Messi',
      number: 10,
      position: 8,
    },
  ];

  const resolvers = {
    Query: {
      players: () => players,
    },
      Mutation: {
        addPlayer: (_, {name, position, number}) => {

                const player = {
                    id: Math.round(Math.random() * 1000),
                    name,
                    position,
                    number,
                };
                players.push(player)
                return player;
        },
        updatePlayer: (_, {id, name, position, number}) => {
            console.log(players, id)
            const index = players.findIndex(player => player.id == id);
            console.log(index)
            players[index] = {id, name, position, number};
            return players[index];
        },
        deletePlayer: (_, {id}) => {
            console.log(players, id)
            const index = players.findIndex(player => player.id == id);
            const removedPlayer = players[index];
            console.log(index, removedPlayer);
            players.splice(index, 1)
            return removedPlayer;
        }
    }
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


/*   mutation createPlayer {
    addPlayer(name: "Other Player", position: 3, number: 2) {
      id
      name
      position
      number
    }
  }

  mutation deletePlayer {
    deletePlayer(id: 3) {
      id
      name
      position
      number
    }
  }

  mutation updatePlayer {
  updatePlayer(id:1, name: "Other Player", position: 3, number: 2) {
    id
    name
    position
    number
  }
}

  query ExampleQuery {
    players {id, name, position, number }
  } */
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`GraphQL Server ready at: ${url}`);