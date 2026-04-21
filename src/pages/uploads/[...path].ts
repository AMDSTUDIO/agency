import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async ({ params }) => {
  const filePath = params.path;
  if (!filePath) {
    return new Response('Not found', { status: 404 });
  }

  const absolutePath = path.join(process.cwd(), 'public', 'uploads', filePath);

  if (!fs.existsSync(absolutePath)) {
    return new Response('Image not found', { status: 404 });
  }

  const ext = path.extname(absolutePath).toLowerCase();
  const mimeTypes: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';
  const fileStats = fs.statSync(absolutePath);
  
  // Create readable stream for the file
  // Wait, Astro can return a buffer directly from fs.readFileSync
  const fileBuffer = fs.readFileSync(absolutePath);

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Content-Length': fileStats.size.toString(),
      'Cache-Control': 'public, max-age=31536000'
    }
  });
};
