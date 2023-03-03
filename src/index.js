import Fastify from 'fastify';

const fastify = Fastify({
    logger: true,
});

dbConnection();

productRoutes.forEach((route) => {
    fastify.route(route);
});

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

const start = async () => {
    try {
        await fastify.listen({ port: 8000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
