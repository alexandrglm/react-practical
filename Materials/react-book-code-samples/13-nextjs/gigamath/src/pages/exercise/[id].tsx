import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Magnitudes, Times, Question } from '../../lib/exercise'
import styles from '../../styles/Home.module.css'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ClearIcon from '@mui/icons-material/Clear';
import Layout from '../../components/layout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';

type Props = {
  id: string,
}

export default function Exercise({ id } : Props) {
  const { data: session, status } = useSession();
  const { t } = useTranslation()
  const [answers, setAnswers] = useState<string[]>([])
  const [exercises, setExercises] = useState<Magnitudes | Times>();
  const [corrected, setCorrected] = useState(false)
  const [correcting, setCorrecting] = useState(false)

  useEffect(() => {
    setAnswers(Array(5).fill(''));
    setCorrected(false)
    let exer: Magnitudes | Times = (id === 'magnitude') ? new Magnitudes(2, 5) : new Times(10, 1);
    setExercises(exer)
  }, []);

  const handleChange = (i: number) => (e: React.FormEvent<HTMLInputElement>) => {
    const changed = [...answers];
    changed[i] = e.currentTarget.value;
    setAnswers(changed)
  }

  const handleCorrect = async () => {
    setCorrecting(true)
    if (!exercises) return;
    for (let i = 0;i<exercises.questions.length;i++)
      exercises.correctAnswer(i, answers[i].replace(",","."))

      try {
        const body = {
          points: exercises.points,
          type: exercises.exerciseType,
          content: JSON.stringify(exercises.questions)
        };

        await fetch('/api/exercise', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })

      } catch (error) {
        console.error(error);
      }
    setCorrected(true)
  }

  if(status === 'unauthenticated') return <Layout><div>You need to log in first</div></Layout>;

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/gigamath.png" alt="Giga Math" width={132} height={76} />
          Giga Math
        </h1>
        <button onClick={() => location.href='/'}>{t`chicken`}</button>
        <div className={styles.description}>
          {
            exercises?.questions?.map((question: Question, i: number) => {
              return (
                <div key={i}>
                  <div>
                    {question.question}
                    {corrected 
                    ?
                      <span>{`  ${answers[i]}`} {question.isCorrect ?  <DoneOutlineIcon /> : <ClearIcon />}  = {question.answer}</span>
                    :
                      <input type="text" onChange={handleChange(i)} />
                    }
                    
                  </div>
                </div>
              )
              
            })
          }
        </div>

        <div className={styles.grid}>
          {corrected 
          ?
          <div>
            <div>Nota: {exercises?.points}</div>
            <button onClick={() => location.reload()}>{t`again`}</button>
          </div>

          :
          <div>
            <button onClick={handleCorrect} disabled={correcting}>{t`correct`}!</button>
          </div>
          }

        </div>
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  const id = String(query.id);
  return {
    props: { 
      id,
      ...(await serverSideTranslations(locale!, ['common']))
    }
  };
};