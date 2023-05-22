export default {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'tasklist',
      version: '1.0.0',
    },
  },
  apis: ['./routes.js'], // Caminho para os arquivos contendo as rotas do seu projeto
};
