import Nav from "./nav";
import Footer from "./footer";
import Header from "./header";
import styles from '../styles/Home.module.css'

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
    return (
      <>
        <Header />
        <div className={styles.container}>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
      </>
    )
  }