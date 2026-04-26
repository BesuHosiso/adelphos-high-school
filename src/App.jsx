import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Student from './pages/Student.jsx'
import Contact from './pages/Contact.jsx'
import Enroll from './pages/Enroll.jsx'
import NotFound from './pages/NotFound.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import ScrollToTop from './components/scrollToTop.jsx'
import Footer from './components/Footer.jsx';

const App = () => {

  return (
    <>
     <ScrollToTop />
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     <Footer/>
    </>
  )
}

export default App;
