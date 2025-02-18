import styles from '@/styles/Home.module.css'

type Props = { value: number }; 

// access through
// http://localhost:3000/types/sample_ssg
export default function SampleSSG({value}: Props) {
  return (
      <main className={styles.main}>
        Sample SSG: {value} this will not change
      </main>
  )
}

export async function getStaticProps() {
    return {
      props: { value: Math.random() }, 
    }
}