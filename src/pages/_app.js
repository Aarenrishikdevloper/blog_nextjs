import '@/styles/globals.css'
import styles from '@/styles/Home.module.css' 
import { AuthContextProvider } from '@/context/context'
export default function App({ Component, pageProps }) {
  return (
    <div>
       <div>
        <AuthContextProvider>
           <Component {...pageProps} />
         </AuthContextProvider>
       </div>
    </div>
  )
}
