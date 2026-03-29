/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Volume } from './pages/Volume';
import { Events } from './pages/Events';
import { Shop } from './pages/Shop';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volume/:id" element={<Volume />} />
        <Route path="/calligraphy/:id" element={<Volume />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}
