const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Liberar CORS para permitir que o frontend acesse
server.use(middlewares);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.header('Access-Control-Allow-Headers', '*'); // Permite todos os headers
  next();
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
