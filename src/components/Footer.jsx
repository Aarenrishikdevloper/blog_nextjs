import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
     <Image src="/img/logo.png" height={50} width={50} alt="logo" className={styles.logo2} />  
     <span className={styles.text1}>
       Made with ♥️ and <b>Next.js</b>.
     </span>
    </footer>
  )
}
