/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Volume } from './pages/Volume';
import { Events } from './pages/Events';
import { Shop } from './pages/Shop';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const homeSections = ['/about', '/photography', '/calligraphy', '/contact'];
    if (!homeSections.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/photography" element={<Home />} />
        <Route path="/calligraphy" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/volume/:id" element={<Volume />} />
        <Route path="/calligraphy/:id" element={<Volume />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}
