import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import layoutStyles from '../styles/layout.module.css';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={layoutStyles.pageContainer}>
      <Head>
        <title>Derek Surguy | Senior Front-End Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={layoutStyles.sidebar}>
        <Sidebar />
      </div>
      <div className={layoutStyles.mainContainer}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Derek Surguy</h1>
            <div className={styles.heroSubtitle}>Senior Front-End Software Engineer</div>
          </div>
        </div>
        <main className={layoutStyles.main}>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}
