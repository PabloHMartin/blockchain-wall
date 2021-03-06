import Link from 'next/link';
import { useRouter } from "next/router";
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    const router = useRouter();

    return ( 
        <nav className={styles.nav}>
            <div className={styles.options}>
                <ul>
                    <li className={router.asPath === "/" ? styles.active : ""}><Link  href={'/'}>wall</Link></li>
                    <li className={router.asPath === "/case-study" ? styles.active : ""}><Link href={'/case-study'}>case study</Link></li>
                </ul>            
            </div>
            <div className={styles.images}>
                <a target='_blank' href="https://github.com/PabloHMartin/blockchain-wall">
                    <img src="/github-icon.svg"/>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/pablohmartin/">
                <img src="/linkedin-icon.svg"/>
                </a>
            </div>
        </nav>
    );
}