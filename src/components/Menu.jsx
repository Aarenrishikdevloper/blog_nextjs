/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css' 
import Image from 'next/image';
import axios from 'axios';
export const Menu = ({cat}) => {  
   
   
      const[posts, setpost] = useState([]);  
      useEffect(()=>{
         if(cat === "undefined"){
          axios.get('/api/cat/'+cat).then(res=>{
            console.log(res.data); 
            setpost(res.data);
          })
         }
          
         
      },[]) 

      

  return (
  
    
      
      
    <div className={styles.menu}>
        <h1 className={styles.head4}>Recomended Post</h1>  
        {posts.length > 0 ? (
          posts.map((post)=>(
            <div className={styles.posts1} key={post.id}>
                    <Image width={400}  height={400} src={post.img}  alt="/"  className={styles.img1}/> 
                    <h2 className={styles.secoundhead}>{post.title}</h2> 
                    <button className={styles.button} style={{padding:'7.5px 15px'}}>Read more</button>
                </div> 
          ))
             
          
             
        ):(<p>No post avalaible</p>)
          

        }
        
            
         </div>
    
  )
}
