import { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Profile() {
  const { t } = useTranslation()
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>{t`about.title`}</h1>
         <h3>{t`about.subtitle`}</h3> 
         <div>{t`about.description`}</div>
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