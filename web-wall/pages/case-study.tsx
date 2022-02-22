import Card from "../core/components/Card";
import styles from '../styles/Case-study.module.css';

let title = 'What is cripto wall?';
let title2 = 'Why Nextjs?';

let msg = `Crypto wall is a demo project. Wall messages live in the blockchain.
Using Truffle and NextJS we can make a twitter like wall using blockchain and web3.`;
let msg2 = `By using NextJs we can make it work for non metamask users. 
We use infura as blockchain access for rendering the wall from the server.`;

let date = (new Date()).getTime();

function CaseStudy() {
    return (  
    <main className={styles.main}>
        <div className={styles.cards}>
            <Card address={title} message={msg} publishDate={date}/>
            <div className={styles.image}>
                <img src="/eth.svg" />
            </div>
            <Card address={title2} message={msg2} publishDate={date}/>
            <div className={styles.image}>
                <img src="/next.svg" />
            </div>
        </div>
    </main>
    );
}

export default CaseStudy;