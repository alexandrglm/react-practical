import { useMutation, gql } from '@apollo/client';

const UPDATE_PLAYER = gql`
  mutation updatePlayer($id: ID!, $name: String, $position: Int, $number: Int) {
    updatePlayer(id: $id, name: $name, position: $position, number: $number) {
      id
      name
      position
      number
    }
  }
`;

function useUpdatePlayer () {
    const [updatePlayer, { data, loading, error }] = useMutation(UPDATE_PLAYER);

    return updatePlayer;
}

export default useUpdatePlayer;