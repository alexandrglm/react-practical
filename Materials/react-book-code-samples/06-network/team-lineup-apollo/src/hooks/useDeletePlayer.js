import { useMutation, gql } from '@apollo/client';

const DELETE_PLAYER = gql`
  mutation deletePlayer($id: ID!) {
    deletePlayer(id: $id) {
      id
      name
      position
      number
    }
  }
`;

function useDeletePlayer() {
    const [deletePlayer, { data, loading, error }] = useMutation(DELETE_PLAYER);

    return deletePlayer;
}

export default useDeletePlayer;