import { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { UserProps } from '../../prisma/types';

export default function Profile() {
  const { t } = useTranslation()
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserProps>(session?.user as UserProps)
  const [name, setName] = useState<string>(session?.user?.name || '');
  const [submitted, setSubmitted] = useState(true)

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      const body = {name};
      await fetch(`/api/user`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setName(name)
      reloadSession();
    } catch (error) {
      console.error(error);
    }
    setSubmitted(true);
  }

  const reloadSession = () => {
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  }; 

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>{t`profile`}</h1>
        <div>
         <h3>{name}</h3> 
         <Image src={user?.image || ''} alt={user?.name} width={128} height={128} />
         <div>
            <input type="text" onChange={handleNameChange} value={name} />
            <button onClick={handleSubmit}>{t`change_name`}</button>
         </div>
        </div>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { 
      ...(await serverSideTranslations(locale!, ['common']))
    }
  };
};