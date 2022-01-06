import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import factory from '../core/ethereum/factory';
import { useEffect, useState } from 'react';



export default function Home() {

  const [owner, setOwner] = useState('')

  useEffect(() => {
    callFactory();
  }, []);

  async function callFactory() {
    const owner = await factory.methods.getOwner().call();
    setOwner(owner);
  }

  return (
    <div className={styles.container}>
      <h2>{owner}</h2>
    </div>
  )
}
