import styles from '../../styles/Card.module.css'

export default function Card({address, message, publishDate}) {

    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
      } as const;

    const dateToNumber = Number(publishDate);
    const pdate =  new Date(dateToNumber);
    const formatedDate = new Intl.DateTimeFormat('default', options).format(pdate);

    return ( 
        <div className={styles.article}>
            <div className={styles.sender}>{address}</div>
            <p className={styles.message}>{message}</p>
            <footer className={styles.publishDate}>{formatedDate}</footer>
        </div>
    );
}