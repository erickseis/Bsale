const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routerApi = require('./routes/index')


//*settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//*initializations

//*midelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// //*routes
// app.use(require('./routes/products.routes'));
// app.use(require('./routes/category.routes'));



//function 
routerApi(app);




// //*starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
