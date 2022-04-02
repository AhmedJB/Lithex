//css
import "../styles/global/per-info.css"
import '../styles/global/fold-style.css'
import '../styles/global/globals.css'

import { UserProvider } from "../contexts/UserContext"
import { ToastProvider } from 'react-toast-notifications';




function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ToastProvider>
  );
  
  
  
  
  
  
}

export default MyApp
