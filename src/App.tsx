import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';

const Boutique = lazy(() => import('./pages/Boutique'));
const Salumeria = lazy(() => import('./pages/Salumeria'));
const DeliMenu = lazy(() => import('./pages/DeliMenu'));
const Showroom = lazy(() => import('./pages/Showroom'));
const Cafe = lazy(() => import('./pages/Cafe'));
const Wine = lazy(() => import('./pages/Wine'));
const Delicatessen = lazy(() => import('./pages/Delicatessen'));
const Store = lazy(() => import('./pages/Store'));
const Events = lazy(() => import('./pages/Events'));
const Yoga = lazy(() => import('./pages/Yoga'));
const Visit = lazy(() => import('./pages/Visit'));
const Magazine = lazy(() => import('./pages/Magazine'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<Suspense fallback={null}><Boutique /></Suspense>} />
            <Route path="/salumeria" element={<Suspense fallback={null}><Salumeria /></Suspense>} />
            <Route path="/deli" element={<Suspense fallback={null}><DeliMenu /></Suspense>} />
            <Route path="/showroom" element={<Suspense fallback={null}><Showroom /></Suspense>} />
            <Route path="/cafe" element={<Suspense fallback={null}><Cafe /></Suspense>} />
            <Route path="/wine" element={<Suspense fallback={null}><Wine /></Suspense>} />
            <Route path="/delicatessen" element={<Suspense fallback={null}><Delicatessen /></Suspense>} />
            <Route path="/store" element={<Suspense fallback={null}><Store /></Suspense>} />
            <Route path="/events" element={<Suspense fallback={null}><Events /></Suspense>} />
            <Route path="/yoga" element={<Suspense fallback={null}><Yoga /></Suspense>} />
            <Route path="/visit" element={<Suspense fallback={null}><Visit /></Suspense>} />
            <Route path="/magazine" element={<Suspense fallback={null}><Magazine /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={null}><AboutUs /></Suspense>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
