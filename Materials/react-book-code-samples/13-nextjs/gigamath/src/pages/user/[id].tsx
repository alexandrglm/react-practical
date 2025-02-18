import prisma from '../../lib/prisma';
import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout';
import { GetStaticProps } from 'next';
import { UserProps } from '../../../prisma/types';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  user: UserProps
}

export default function User({user}: Props) {
  const { t } = useTranslation();
  if (!user) return <Layout><div>Loading...</div></Layout>
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {user.name}
        </h1>
         <h3>{t(`completed_exercises`, {amount : user?.exercises?.length})}</h3> 
         <Image src={user.image || ''} alt={user.name} width={128} height={128} />
      </main>
      </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'clbmt6ixe0000sbg6wvooeoex' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const id = String(params?.id);
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      exercises: {
          select: { id: true },
      },
    },
  });

  return {
    props: { 
      user: JSON.parse(JSON.stringify(user)),
      ...(await serverSideTranslations(locale!, ['common']))
    },
  };
};
