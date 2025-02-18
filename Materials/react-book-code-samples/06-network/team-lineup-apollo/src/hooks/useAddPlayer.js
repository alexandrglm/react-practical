import { useMutation, gql } from '@apollo/client';

const CREATE_PLAYER = gql`
  mutation createPlayer($name: String, $position: Int, $number: Int) {
    addPlayer(name: $name, position: $position, number: $number) {
      id
      name
      position
      number
    }
  }
`;

function useAddPlayer () {
    const [createPlayer, { data, loading, error }] = useMutation(CREATE_PLAYER);

    return createPlayer;
}

export default useAddPlayer;