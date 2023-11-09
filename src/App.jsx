import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import News from './components/About/News';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={< Home />} />
        
        <Route path='/about' element={< About />} />
        <Route path='/news' element={< News />} />

        <Route path='/gallery/:category' element={< GalleryContainer />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
