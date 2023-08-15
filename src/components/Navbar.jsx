import React, { useContext } from 'react'
import styles from '@/styles/Home.module.css' 
import Image from 'next/image'
import Link from 'next/link' 
import axios from 'axios'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/context'
export default function Navbar() {
  const router =useRouter() 
  const{currentUser, setCurrentUser} =useContext(AuthContext); 
  async function logout(){
       try{
         await axios.post('/api/logout'); 
         setCurrentUser(null);
      
         localStorage.clear();
       }catch{
         alert("Something went wrong");
       }
  }
  return (
    <div className={styles.navbar}>
        <div className={styles.navcontainer}>
         <div className={styles.logo}>
          <Image src="/img/logo.png" width={120} height={120} alt="logo" className={styles.img} onClick={()=>router.push("/")}/> 

         </div> 
         <div className={styles.linkdiv}>
            <Link href="/?cat=Art" className={styles.link}>
             <h6 className={styles.navlink}>ART</h6>  
             </Link>
             <Link href={'/?cat=Science'} className={styles.link}>
             <h6 className={styles.navlink}>SCIENCE</h6>  
             </Link>
             <Link href={'/?cat=Tecnology'} className={styles.link}>
             <h6 className={styles.navlink}>TECNOLOGY</h6> 
             </Link>
             <Link href={'/?cat=Cinema'} className={styles.link}>
             <h6 className={styles.navlink}>CINEMA</h6>
             </Link>
             <Link href={'/?cat=Design'} className={styles.link}>
             <h6 className={styles.navlink}>DESIGN</h6>
             </Link> 
             <Link href={'/?cat=Food'} className={styles.link}>
               <h6 className={styles.navlink}>FOOD</h6>  
             </Link>
             
             

            {currentUser &&(<span className={styles.logout}>{currentUser.username}</span>)}  
            {currentUser ?<span className={styles.logout} style={{cursor:"pointer"}} onClick={logout}>Logout</span>:<span className={styles.logout} onClick={()=>router.push('/login')}>Login</span>}
            {currentUser? <span className={styles.write} onClick={()=>router.push('/add')}>Write</span>:null}
             
            
             
         </div> 
         
    </div>
    </div>
  )
}
