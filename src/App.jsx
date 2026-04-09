import './App.css'
import AboutUs from './components/AboutUs'
import BasicInformation from './components/BasicInformation'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import RecentProject from './components/RecentProject'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <BasicInformation/>
    <RecentProject/>
    <AboutUs/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
