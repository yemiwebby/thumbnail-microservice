import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import routes from './src/routes/index';

import AuthService from './src/service/authService';


const app = express();

// API DOCS
const swaggerDocument= YAML.load(`${process.cwd()}/src/swagger.yaml`);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// PORT 
const port = process.env.PORT || 3000;
app.set('port', port);

// logger
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("public"));

routes(app);


app.get('/*', (req, res) => {
    res.status(404).json({
        message: 'Resource not found'
    })
});

/**
 * Listen on a port
 */
app.listen(port);

export default app;