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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if we're not navigating to a hash section or a hash-based page
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();
  
  // Handle hash-based routing for Shop and Events only
  // This prevents 404s on refresh for these standalone pages
  if (location.hash === '#/shop') {
    return <Shop />;
  }
  if (location.hash === '#/events') {
    return <Events />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/volume/:id" element={<Volume />} />
      <Route path="/calligraphy/:id" element={<Volume />} />
      {/* Keep these as fallbacks but prioritize hash-based navigation in UI */}
      <Route path="/events" element={<Events />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
