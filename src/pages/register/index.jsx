import React, { useState } from 'react'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import axios from 'axios';
export default function Register() {
    const router = useRouter();
    const [username,setusername] = useState(''); 
    const [email, setemail] = useState(''); 
    const [password, setpassword]= useState('');  
   async function submit(e){
     e.preventDefault(); 
     try{
     const res =  await axios.post("/api/signup",{username, email, password});  
     if(res.status === 200){
      alert("Signup sucessfully"); 
      router.push("/login");
     }
     if(res.status === 400){
       alert("User alreay exist")
     }

     } 
     catch{
       alert("Something went wrong or user alreay exist")
     }
   }
    
  return (
    <div className={styles.auth}> 
    <h1 className={styles.header1}>Register</h1> 
    <form className={styles.form} onSubmit={submit}>
      
       <input type="text" placeholder='username' className={styles.inputauth}  value={username} onChange={(e)=>setusername(e.target.value)}/>  
       <input type="email" placeholder='email' className={styles.inputauth}  value={email} onChange={(e)=>setemail(e.target.value)}/> 
        <input type="password" placeholder='password' className={styles.inputauth}  value={password} onChange={(e)=>setpassword(e.target.value)}/> 
        <button className={styles.key} type='submit'>Register</button>  
        <span onClick={()=>router.push('/login')}  className={styles.span1}>  have an account? Login </span>
    </form>

  </div>
  )
}
