import styles from '@/styles/Home.module.css'

type Props = { value: number }; 

// access through
// http://localhost:3000/types/sample_ssr
export default function SampleSSR({value}: Props) {
  return (
      <main className={styles.main}>Sample SSR: {value}</main>
  )
}

export async function getServerSideProps() {
    return {
      props: { value: Math.random() }, 
    }
}