import styles from '../../styles/Home.module.css'
import axios from 'axios';
import { GetServerSideProps } from 'next';

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

export default function Pokemon({pokemon}: Props) {
  const {name, abilities, weight} = pokemon;
  const {front_default, back_default} = pokemon.sprites;

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>{name}</h1>
        <div>
         <h3>{name}</h3>
         <div>Weight: {weight}</div>
         <img src={front_default} alt="" /><img src={back_default} alt="" />
         <h5>Abilities</h5>
         <ul>
          {abilities.map((item: Ability, i: number) => <li key={i}>{item.ability.name}</li>)} 
         </ul>
        </div>
      </main>
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const name = String(query.name);
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return {
      props: { 
        pokemon: pokemon.data,
       }
  };
};