const productsRouter = require('./products.routes');//3
const categoryRouter = require('./category.routes');

function routerApi(app) {
    app.use('/api/v1/products', productsRouter) // 3
    app.use('/api/v1/categories', categoryRouter)
}



module.exports = routerApi;