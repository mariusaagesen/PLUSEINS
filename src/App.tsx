import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import Salumeria from './pages/Salumeria';
import DeliMenu from './pages/DeliMenu';
import Showroom from './pages/Showroom';
import Cafe from './pages/Cafe';
import Wine from './pages/Wine';
import Delicatessen from './pages/Delicatessen';
import Store from './pages/Store';
import Events from './pages/Events';
import Yoga from './pages/Yoga';
import Visit from './pages/Visit';
import Magazine from './pages/Magazine';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/salumeria" element={<Salumeria />} />
            <Route path="/deli" element={<DeliMenu />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/wine" element={<Wine />} />
            <Route path="/delicatessen" element={<Delicatessen />} />
            <Route path="/store" element={<Store />} />
            <Route path="/events" element={<Events />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
