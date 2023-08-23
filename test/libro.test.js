const supertest = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const libroRoutes = require('../src/routes/libro.routes'); // Asegúrate de que esta ruta sea correcta

const app = express();
app.use(bodyParser.json());
app.use('/', libroRoutes);

const request = supertest(app);

describe('Libro Routes Tests', () => {
  it('GET /libro should return a list of libros', async () => {
    jest.setTimeout(10000);
    const response = await request.get('/libro');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Verifica que la respuesta sea un arreglo
    // Verifica otros aspectos de la respuesta según tus necesidades
  });
});
