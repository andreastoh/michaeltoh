import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log(`Starting server in ${process.env.NODE_ENV || 'development'} mode...`);

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // Use vite's connect instance as middleware
    app.use(vite.middlewares);

    // Explicit SPA fallback for development
    app.get('*', async (req, res, next) => {
      const url = req.originalUrl;
      console.log(`[Dev] Handling request for: ${url}`);
      
      try {
        // Always read fresh index.html in dev
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        // Apply Vite HTML transforms (injects HMR client, etc.)
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    console.log(`[Prod] Serving static files from: ${distPath}`);
    
    // Serve static assets from dist
    app.use(express.static(distPath, { index: false }));
    
    // Fallback all other requests to index.html for SPA routing
    app.get('*', (req, res) => {
      const url = req.originalUrl;
      console.log(`[Prod] Fallback to index.html for: ${url}`);
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
