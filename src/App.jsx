import Footer from './components/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Navbar from './components/header/Navbar'
import Home from './components/home/home'
import Project from './components/projects/Project'

function App() {
  return (
    <>
     <Navbar/>
    <main> 
     <Home/>
     <About/>
     <Project/>
    <Contact/>
     </main>
     <Footer/>
    </>
  )
}

export default App
