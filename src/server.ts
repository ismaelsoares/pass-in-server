import fastify from "fastify";

const app = fastify({
  logger: true,
});

// Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS...
// Corpo da requisição (Request Body)
// Parâmetros de busca (Search Params, Query Params)
// Parâmetros de rota (Route params) => Identificação de recursos
// Cabeçalhos (Headers) => Contexto da requisição

app.post("/events", (request, reply) => {
  console.log(request.body);

  return request.body;
});

app
  .listen({ port: 3333 })
  .then(() => console.log(`Server burning on port 3333`));
