import React from 'react'
import styles from '@/styles/Home.module.css' 
import Image from 'next/image'
export default function Loader() {
  return (
    <div className={styles.loader}> 
        <Image src='/img/loader.png' width={80} height={80} className={styles.loaderimg} alt="/" />
    </div>
  )
}
