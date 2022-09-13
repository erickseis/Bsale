//Import Routes
const productsRouter = require('./products.routes');//3
const categoryRouter = require('./category.routes');

//Routes Defined for Api Rest
function routerApi(app) {
    app.use('/api/v1/products', productsRouter) // 3
    app.use('/api/v1/categories', categoryRouter)
}


//Export all Routes
module.exports = routerApi;