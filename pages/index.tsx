import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import layoutStyles from '../styles/layout.module.css';
import Sidebar from '../components/Sidebar';

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
        <main className={layoutStyles.main}>
          <div className={styles.hero}>
            <div className={styles.heroText}>
              <h1>Derek Surguy</h1>
              <div className={styles.heroSubtitle}>Senior Front-End Software Engineer</div>
            </div>
          </div>
        </main>
        <footer className={layoutStyles.footer}></footer>
      </div>
    </div>
  )
}
