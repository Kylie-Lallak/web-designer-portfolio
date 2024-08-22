import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';



import Navbar from './componets/navbar';
import Footer from './componets/Footer'



function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
   

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
     
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
