import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Main from '../components/Main'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

const Home = () =>{
    return (
        <>
        <div className='bg-background	min-h-screen text-white'>
           <Header />
           <Main/>
           <Cards/>
           <Footer/> 
    
          </div>
        </>
      )
}

export default Home;