import styles from '@/styles/Home.module.css'
import axios from 'axios';
import useSWR from 'swr';

type Props = { name: string }; 

// access through
// http://localhost:3000/types/sample_csr

export default function SampleSSR({name = 'pikachu'}: Props) {
  const fetcher = (...args: string[]) => axios.get(args[0]).then(res => res.data);
  const { 
    data, error, isLoading 
  } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Request failed.</div>

  return (
    <main className={styles.main}>
      <h1>{data.name}</h1>
      <p><img src={data.sprites.front_default} alt={data.name} /></p>
    </main>
  )
}