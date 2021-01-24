import * as React from "react";
import styles from '../styles/components/ContentHero.module.css';

type Props = {
  title: string;
  datePublished?: Date;
}

function ContentHero({ title, datePublished}: Props) {
  const datePublishedElem = datePublished ? <div className={styles.datePublished}>{datePublished.toLocaleString()}</div> : null;
  return (
    <div className={styles.contentHero}>
      <div className={styles.heroText}>
        <h1>{title}</h1>
        {datePublishedElem}
      </div>
    </div>
  );
}

export default ContentHero;
