


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from './components/Property/Property';
import './App.css'
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Map from './components/Map/Map'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Plot from './components/Plot/Plot';
import Commercial from './components/Commercial/Commercial';
import Rent from './components/Rent/Rent';
import Agent from './components/Agent/Agent';
function App() {
  

  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/"  element={<Home />} />
          <Route path="/property"  element={<Property />} />
          <Route path="/blog"  element={<Blog/>} />
          <Route path="/map"  element={<Map/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/plot"  element={<Plot/>} />
          <Route path="/commercial"  element={<Commercial/>} />
          <Route path="/rent"  element={<Rent/>} />
          <Route path="/agent"  element={<Agent/>} />



          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
