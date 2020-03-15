import movieListHandler from "./handlers/movies";
const path = require('path')

const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../../dist'),
  prefix: '/public/',
});

fastify.get('/', function (req, reply) {
  reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

// Declare a route
fastify.get('/movies', movieListHandler)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()