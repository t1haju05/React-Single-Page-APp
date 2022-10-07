import NavBar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ContactUs from './pages/contactUs';
import NotFound from './pages/notfound';

function App() {
  return (
    <>
    <NavBar />
    <Footer />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </div>
    </>
  );
}

export default App;
