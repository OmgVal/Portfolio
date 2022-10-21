import '../styles/globals.css'
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return(
    <>
      {/* header here */}
      <NavBar />
      {/* aside.. */}
      <Component {...pageProps} />
      {/* footer */}
    </>
  ) 
}

export default MyApp
