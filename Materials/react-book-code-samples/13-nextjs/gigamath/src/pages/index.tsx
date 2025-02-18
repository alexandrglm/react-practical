import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import Users from '../components/users';
import prisma from '../lib/prisma';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ExerciseProps, UserProps } from '../../prisma/types';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type Props = {
  users: UserProps[]
}

export default function Home(props: Props) {
  const { t } = useTranslation()
  const [users, setUsers] = useState(props.users);

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image src="/gigamath.png" alt="Giga Math" width={132} height={76} />
          Giga Math
        </h1>
        <div className={styles.description}>
          <div><b>{t`do_exercise`}</b></div>
          <Link href="/exercise/magnitude">{t`magnitude`}</Link> | <Link href="/exercise/time">{t`time`}</Link>
        </div>
        <Users users={users} />
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const users = await prisma.user.findMany({
    include: {
      exercises: true, 
    },
  }) as (UserProps & { exercises: ExerciseProps[]; })[];

  for (let i=0;i<users.length;i++) {
    users[i].avg = (+users[i].exercises.reduce((acc: number, current: ExerciseProps) => current.points + acc, 0) / users[i].exercises.length) || 0;
  }

  users.sort((a: UserProps,b: UserProps) => b?.avg || 0 - (a.avg || 0))

  return {
    props: { 
      users: JSON.parse(JSON.stringify(users)),
      ...(await serverSideTranslations(locale!, ['common']))
    },
    revalidate: 30, // In seconds
  };
};