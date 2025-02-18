import styles from '../../../styles/Home.module.css'
import axios from 'axios';
import { GetStaticProps, GetStaticPropsContext } from 'next';

type Ability = {
  ability: {name: string}
};

type Pokemon = {
  name: string;
  weight: number;
  sprites: {
    front_default: string,
    back_default: string
  };
  abilities: Ability[];
};

type Props = {
  pokemon: Pokemon;
};
// access through
// http://localhost:3000/types/sample_isr/raichu

export default function Pokemon({pokemon}: Props) {
  if (!pokemon) return <div>Loading...</div>
  const {name, weight} = pokemon;
  const {front_default, back_default} = pokemon.sprites;

  return (
    <div>
      <main className={styles.main}>
         <h3>{name}</h3>
         <div>Weight: {weight}</div>
         <img src={front_default} alt="" /><img src={back_default} alt="" />
      </main>
      </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'pikachu' } }, { params: { name: 'mewtwo' } }],
    fallback: true, // true: returns null until it gets // blocking : blocks // false: 404
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const name = String(context?.params?.name);
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return {
      props: { 
        pokemon: pokemon.data,
      },
      revalidate: 30,
  };
};