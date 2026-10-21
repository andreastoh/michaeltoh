import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Today's date in Singapore, baked into the build (used by the Events page).
const buildDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Singapore' }).format(new Date());

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  define: {
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
});
