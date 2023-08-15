import React, { useEffect, useState } from 'react'
import { Menu } from './Menu'
import Image from 'next/image'  

import styles from '@/styles/Home.module.css'
import axios from 'axios'
import moment from 'moment'
export default function Post({id}) {
    console.log(id);
    const [posts, setpost] = useState([]); 
    useEffect(()=>{
        axios.get('/api/singlepost/?id='+id).then(res=>{
            console.log(res.data) 
            setpost(res.data)
            
        })
    },[id])
  

    
  return (
    <div className={styles.single}> 
    
    
        
    <div className={styles.postcontent}>
    <Image src = {posts.img} alt="/"  className={styles.postimage} width={800} height={300}  /> 
    <div className={styles.user}>  
      <Image src="https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=1600" width={50} height={50} className={styles.userimg} alt="/"/>  
      <div className={styles.info}>
         <span className={styles.username2}>{posts.uid?.username}</span> 
         <p className={styles.date}>Posted {moment(posts.createdAt).fromNow()}</p>
      </div>
      <div className={styles.edit}>
          <Image src='/img/edit.png'  alt="/" className={styles.icon} width={20} height={20}/>  
          <Image  src='/img/delete.png'  alt="/" className={styles.icon} width={20} height={20}/> 

      </div>
     
       
     </div>    
     <h1 className={styles.head3}>{posts.title}</h1> 
    <p className={styles.para} dangerouslySetInnerHTML={{__html:posts.desc}}></p>
       

 </div>   
  <Menu/>
  </div>
  )
} 

