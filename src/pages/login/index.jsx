import React, { useContext, useState } from 'react' 
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/context';
export default function Login() { 
  const router = useRouter()
  const [username,setusername] = useState('');  
  const [password, setpassword]= useState('');   
  const{login} = useContext(AuthContext);
  async function signin(e){
    e.preventDefault(); 
    
      await login(username, password); 
      router.push("/");
  
      
  
  }
  return (
    <div className={styles.auth}> 
      <h1 className={styles.header1}>Login</h1> 
      <form className={styles.form} onSubmit={signin}>
         <input type="text" placeholder='username' className={styles.inputauth}  value={username} onChange={(e)=>setusername(e.target.value)}/> 
          <input type="password" placeholder='password' className={styles.inputauth}  value={password} onChange={(e)=>setpassword(e.target.value)}/> 
          <button className={styles.key} type='submit'>Login</button>  
          <span onClick={()=>router.push('/register')}  className={styles.span1}>Do not have an account? Register</span>
      </form>

    </div>
  )
}
