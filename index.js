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
app.use(express.urlencoded({ extended: false })) // desde express podemos entender lo q venga del input


//*function routes
routerApi(app);

// //*starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
