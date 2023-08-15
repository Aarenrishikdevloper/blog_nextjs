/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'




 export const Open_sans=Open_Sans({ subsets: ["latin"], display:'swap',})

export default function Home() { 
  const router = useRouter();
  const{cat} = router.query 
  const [posts, setpost] = useState([]);
  console.log(cat);
  useEffect(()=>{
      if(typeof window !== "undefined" && window.history && cat){
         window.history.replaceState({}, document.title, window.location.pathname);
      }
  },[cat])
  useEffect(()=>{
    try{
    if(typeof cat === "undefined"){

    axios.get('/api/getpost').then(res=>{
        setpost(res.data);
    }) 
  }
 }catch{
    alert("Something went wrong");
 }
 },[cat]) 
 const sub = cat !== "undefined"
  
  const getext = (html)=>{
     const doc = new DOMParser().parseFromString(html, "text/html") 
     return doc.body.textContent;
  }
  
  useEffect(()=>{
    try{
    if( typeof cat !== "undefined"){
      axios.get('/api/cat/'+cat).then(res=>{
        setpost(res.data); 
        console.log(res.data);
      })
    }
  }catch{
     alert("Something went wrong");
  }
  },[cat])
  
  
  return (
    
    <div className={styles.app}>  
    
      
    
    <div className={styles.container}>
    <Navbar/>
     <div className={styles.home}>
        <div className={styles.posts}>
          {posts.map((post)=>(
            <div className={styles.post} key={post.id}>
              <div className={styles.img}>
               
                
                
                <Image width={400} height={400} src={post.img}  className={styles.postimage} alt="/"/>
              </div> 
              <div className={styles.content}>
                <Link className={styles.link} href={`/single/${post._id}`}>
                <h1 className={styles.head2}>{post.title}</h1>  
                </Link>
                <p className={styles.desc}>{getext(post.desc)}</p>

                
               
                   <button  className={styles.button} onClick={()=>router.push(`/single/${post._id}`)} >Read More</button>
                
                

              </div>
            </div>
          ))}
          </div> 
       
     </div>
     <Footer/>
    </div> 
    </div>
  )
}  


