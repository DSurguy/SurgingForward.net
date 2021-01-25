import Head from 'next/head'
import layoutStyles from '../styles/layout.module.css';
import Sidebar from '../components/Sidebar';
import ContentHero from '../components/ContentHero';

export default function Contact() {
  return (
    <div className={layoutStyles.pageContainer}>
      <Head>
        <title>Contact Derek Surguy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={layoutStyles.sidebar}>
        <Sidebar />
      </div>
      <div className={layoutStyles.mainContainer}>
        <main className={layoutStyles.main}>
          <ContentHero title="Contact" datePublished={new Date()} />
        </main>
        <footer className={layoutStyles.footer}></footer>
      </div>
    </div>
  )
}
