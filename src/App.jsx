import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import About from '../src/pages/About.jsx'
import Pricing from '../src/pages/Pricing.jsx'
import { Routes , Route , useRoutes, BrowserRouter} from 'react-router-dom'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'


function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>


  </BrowserRouter>
  );
}

export default App
