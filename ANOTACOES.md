- Os browsers não dão suporte a requisições POST, PUT, DELETE, apenas requisições GET.

-Em uma estrutura API, os dados trocados entre o back end e o front end deve seguir o padrão JSON;

Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS...
Corpo da requisição (Request Body)
Parâmetros de busca (Search Params, Query Params)
Parâmetros de rota (Route params) => Identificação de recursos
Cabeçalhos (Headers) => Contexto da requisição

-Alguns passos importantes para a criação da API: - Deve ser criada as rotas, no caso o Fastify;

    - Usar uma boa extensão para testagem de rotas, no caso, o Client Rest do VsCode é uma boa opção;
    - Depois da criação da rota, é necessária a validação desta rota, para que saiba se o tipo de dado enviado para a API é realmente o tipo esperado. Existem várias formas de validação e uma das mais interessantes e confiáveis é usando ferramentas como o Zod.
    - Depois de validado os dados com o zod (yup ou qualquer outra), é feito a conexão com o banco de dados usando o PrismaClient e criar o evento no mesmo Banco de dados
    - Depois com o fastify-type-provider-zod, deve se tratar o tipo de requisições e respostas que deverão ser enviadas no caso o request body, os parâmetros de busca, de rota, e os cabeçalhos.

-Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS...

-Corpo da requisição (Request Body)

-Parâmetros de busca (Search Params, Query Params)

-Parâmetros de rota (Route params) => Identificação de recursos

-Cabeçalhos (Headers) => Contexto da requisição

    20x => Sucesso
    30x => Redirecionamento
    40x => Erro do cliente (Erro em alguma informação enviada por QUEM está fazendo a chamada p/ API)
    50x => Erro do servidor (Um erro que está acontecendo INDEPENDENTE do que está sendo enviado p/ o servidor)
