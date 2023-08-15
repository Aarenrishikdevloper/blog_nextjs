import Navbar from '@/components/Navbar'
import React,{useContext, useEffect, useState} from 'react'
import Footer from '@/components/Footer' 
import styles from '@/styles/Home.module.css' 
import dynamic from 'next/dynamic';
import axios from 'axios';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; 
import { AuthContext } from '@/context/context';
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'; 

import app from '../../../firebase/config'; 
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';



const storage = getStorage(app);
export default function Edit() { 
  const router = useRouter() 
  const{currentUser, setCurrentUser} =useContext(AuthContext);  
  const   id   = router.query.edit;   
  console.log(id); 
  
  
 

 
  
  const[loader, setloder] = useState(false);
  const [value, setValue] = useState( '');
   const[title, setitle] = useState(''); 
   const[file, setfile] = useState(null); 
   const[cat,setcat] = useState('');  
   const[submitted,setsubmitted] =useState(false);
   const[url,seturl] =useState('');  
   const[posts, setposts] = useState([]);
   async function get(id){  
    
    if(id !== 'undefined'){
   
      fetch('/api/singlepost/'+id).then(res=>{
        console.log(res)
         res.json().then(info=>{ 
           setValue(info.desc);   
           setitle(info.title); 
           setcat(info.cat); 
            setposts(info)
           
 
         })
          
         
      })
       
    }
     
      
     
   } 
   useEffect(()=>{
    if(id !== 'undefined'){
      get(id); 
      console.log(id)
    }
     
   },[id])
   async function submit(e){
    e.preventDefault();  
    if(file !== null){
      const stotagref = ref(storage, "Images/"+file?.name); 
    setloder(true);
    uploadBytes(stotagref, file).then((snapshot)=>{
      
      console.log("Uploaded sucessfully");
    }).then(resp=>{
        getDownloadURL(stotagref).then(async(url)=>{
           seturl(url); 
           setsubmitted(true);
            
           
        })
    }) 
    console.log(cat);
    
    }else{
      const res = await axios.put(`/api/edit/${posts._id}`,{title, desc:value, cat}) 
      if(res.status === 200){
        setloder(false); 
        router.push('/')
      }   
    }
    
  } 
  
  const savedoc = async()=>{
    const res = await axios.put(`/api/edit/${posts._id}`,{title, desc:value, cat, image:url,}) 
    if(res.status === 200){
      setloder(false); 
      router.push('/')
    }
  }
  useEffect(()=>{
     if(submitted == true){
      savedoc();
     }
  },[submitted]);

  return (
    <div className={styles.app}>   
    <div className={styles.container}>
     <Navbar/> 
     <div className={styles.add}>
       <div className={styles.formcontainer}>
      
        <input type="text" placeholder='Title' className={styles.title} value={title}  onChange={(e)=>setitle(e.target.value)}/> 
       
        
          <QuillEditor theme="snow" value={value} onChange={setValue} className={styles.editor} />
        
       </div> 
       <div className={styles.menu2}>
        <div className={styles.item}>
          <h1 className={styles.heading5}>Publish</h1> 
           <span>
             <b>Status:</b> Draft 

           </span> 
           <span>
             <b>Visibility:</b>Public
           </span>  
           <input type="file" name="" id="file"  style={{display:"none"}}  onChange={(e)=>setfile(e.target.files[0])}/> 
           <label htmlFor='file' className={styles.files}>Upload Image</label> 
           <div className={styles.keycontainer}>
             <button className={styles.key1}>Save as Draft</button> 
             <button className={styles.key2} onClick={submit}>Publish</button>
           </div>
        </div> 
        <div className={styles.item}>
        <h1 className={styles.heading5}>Category</h1>   
        <div className={styles.cat}>
          <input type="radio" name="" id="science"  checked={cat ==="Science"} onChange={(e)=>setcat(e.target.value)} value="Science"/>  
          <label htmlFor='science'>Science</label>
        </div> 
        <div className={styles.cat}>
          <input type="radio" name="" id="Art"  checked={cat ==="Art"} onChange={(e)=>setcat(e.target.value)}value="Art"/>  
          <label htmlFor='art'>Art</label>
        </div>
        <div className={styles.cat}>
          <input type="radio" name="" id="Tecnology"  checked={cat ==="Tecnology"} onChange={(e)=>setcat(e.target.value)} value="Tecnology"/>  
          <label htmlFor='Tecnology'>Tecnology</label>
        </div>
        <div className={styles.cat}>
          <input type="radio" name="" id="cinema"  checked={cat ==="Cinema"} onChange={(e)=>setcat(e.target.value)} value="Cinema" />  
          <label htmlFor='cinema'>Cinema</label>
        </div>
        <div className={styles.cat}>
          <input type="radio" name="" id="design" checked={cat ==="Design"} onChange={(e)=>setcat(e.target.value)} value="Design" />  
          <label htmlFor='design'>Design</label>  
        </div> 
        <div className={styles.cat}>
          <input type="radio" name="" id="food" checked={cat ==="Food"} onChange={(e)=>setcat(e.target.value)}value="Food"/>  
          <label htmlFor='food'>Food</label> 
        </div>

        </div>
       </div> 
       
      
     </div> 
     {loader?<p>Loading</p>:null} 
     <Footer/>
     </div>
    </div>
  )
} 
