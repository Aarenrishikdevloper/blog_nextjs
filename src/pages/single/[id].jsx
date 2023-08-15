/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Menu } from '@/components/Menu'
import { useRouter } from 'next/router' 
import Post from '@/components/Single' 
import moment from 'moment'
import axios from 'axios' 
import { AuthContext } from '@/context/context'
import Loader from '@/components/Loader'

export default function Single() { 
  const{currentUser, setCurrentUser} =useContext(AuthContext); 
 const router =  useRouter(); 
 const[loading, setloading] = useState(false);
 const  { id }  = router.query; 
 console.log(id);

 const [posts, setpost] = useState([]);  
 console.log(id)
 async function get(id){  
  setloading(true);
  if(id !== 'undefined'){
 
  const res =  await axios.get('/api/singlepost/'+id) 
   setloading(false) ;

    console.log(res.data)  
    setpost(res.data)
 } }
 useEffect(()=>{
  try{
  if(id !== 'undefined'){
    get(id); 
    console.log(id)
  } 
 }catch{
   alert("Something went wrong")
 }
   
 },[id])

async function deletepost(id){ 
  try{
    alert("Do you want to delete the post"); 
    const res = await axios.delete('/api/delete/'+id); 
    if(res.status === 200){
       router.push('/');
    }
  }catch{

  }

}
  

if (router.isReady && typeof id !== 'undefined') {
  return(
    <div className={styles.app}>
    <div className={styles.container}>
      <Navbar/> 
      <div className={styles.single}>
        <div className={styles.postcontent}>
          <Image src={posts?.img} className={styles.imagepost} width={1024} height={900} alt="/"/> 
          <div className={styles.user}>
              <Image src={posts.uid?.profilepic} width={50} height={50} className={styles.userimg} alt="/"/> 
            <div className={styles.info}>
            <span className={styles.username2}>{posts.uid?.username}</span> 
             <p className={styles.date}>Posted {moment(posts.createdAt).fromNow()}</p>
            </div> 
            {currentUser?._id === posts.uid?._id&&(
              <div className={styles.edit}>
              <Image src='/img/edit.png'  alt="/" className={styles.icon} width={20} height={20} onClick={()=>router.push(`/edit/${posts._id}`)}/>  
              <Image  src='/img/delete.png'  alt="/" className={styles.icon} width={20} height={20} onClick={()=>deletepost(posts._id)}/> 

    
          </div>
            )}
           
               
          </div> 
          <h1 className={styles.head3}>{posts.title}</h1> 
          <p className={styles.para} dangerouslySetInnerHTML={{__html:posts.desc}}></p>
        </div>  
        
       
      </div>
      <Footer/>
    </div>
 </div>
  )
} 
 
}


