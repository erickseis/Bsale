//Import  of the necessary tools for the implementation of the code
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routerApi = require('./routes/index')

//*settings
//configuration of the connection with the server
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//*initializations

//*midelwares
//expressions to give specific commands to execute in the code
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }))


//*function routes
//define functions of routes
routerApi(app);

// //*starting server
//server initialization with a dynamic port
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
