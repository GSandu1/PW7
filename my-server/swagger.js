const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for our backend services',
        },
        servers: [
            { url: 'http://localhost:3000', description: 'Development Server' },
        ],
        components: {
            securitySchemes: {
                bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
            }
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./server.js'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};