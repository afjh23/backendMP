import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        title: 'Mi API',
        description: 'Documentación',
    },
    host: 'localhost:3000',
    schemes: ['http'],
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./routes/users.routes.js', './routes/auth.routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)
    .then(() => {
        import('./index.js')
    })