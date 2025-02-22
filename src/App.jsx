import './App.css';
import Home from './assets/components/Home/Home';
import Header from './assets/components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './assets/components/About/About';
import GalleryContainer from './assets/components/GalleryContainer/GalleryContainer';
import News from './assets/components/About/News';
import Atelier from './assets/components/About/Atelier';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewsDetail from './assets/components/About/NewsDetail';
import CheckScroll from './CheckScroll';
import { Contact } from './assets/components/About/Contact';
import '@fontsource-variable/red-hat-display';
import usePageTracking from './usePageTracking';

function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <Header />
      <CheckScroll/>
      <Routes className='appRoutes'>

        <Route path='/' element={< Home />} />
        
        <Route path='/about' element={< About />} />
        <Route path='/news' element={< News />} />
        <Route path='/atelier' element={< Atelier />} />
        <Route path='/contact' element={< Contact />} />

        <Route path='/:category' element={< GalleryContainer />} />
        <Route path='/prensa/:id' element={< NewsDetail />} />
        
      </Routes>
    </BrowserRouter>
  );
}
const PageTracker = () => {
  usePageTracking();
  return null;
};
export default App;
