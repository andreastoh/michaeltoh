import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Volume } from './pages/Volume';
import { Events } from './pages/Events';
import { Shop } from './pages/Shop';
import { ThankYou } from './pages/ThankYou';
import { NotFound } from './pages/NotFound';
import { usePageMeta } from './usePageMeta';

/** Old links used "#/shop"-style URLs. Send them to the real page instead. */
function LegacyHashRedirect() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash.startsWith('#/')) {
      navigate(hash.slice(1), { replace: true });
    }
  }, [hash, navigate]);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Section links like "/#contact" are handled by the Home page.
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function PageMeta() {
  usePageMeta();
  return null;
}

export function AppRoutes() {
  return (
    <>
      <LegacyHashRedirect />
      <ScrollToTop />
      <PageMeta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volume/:id" element={<Volume />} />
        <Route path="/calligraphy/:id" element={<Volume />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
