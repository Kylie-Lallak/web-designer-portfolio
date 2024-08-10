import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';

import Navbar from './componets/navbar';



function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/skills' element={<Skills />}/>
    </Routes>
       
    </BrowserRouter>
  )
}

export default App
