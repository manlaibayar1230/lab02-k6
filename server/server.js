// Алхам 5: Энгийн локал сервер (зөвхөн Node.js-ийн стандарт сан, нэмэлт хамаарал байхгүй)
//   GET /       -> шууд хариулна (normal)
//   GET /slow   -> 100ms хүлээгээд хариулна (slow)
// Ажиллуулах: node server/server.js   (порт: 3000)
const http = require('http');

const PORT = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  if (req.url === '/slow') {
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ endpoint: 'slow', delayMs: 100 }));
    }, 100);
    return;
  }
  if (req.url === '/' || req.url === '/normal') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ endpoint: 'normal' }));
    return;
  }
  res.writeHead(404);
  res.end('not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Local server listening on http://127.0.0.1:${PORT}`);
});
