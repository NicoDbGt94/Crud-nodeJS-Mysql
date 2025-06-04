import express from 'express';
import morgan from 'morgan';
import {join,dirname} from 'path';
import { fileURLToPath } from 'url';
import personasRoutes from './routes/personas.routes.js';

//initializations
const app = express();
const __dirname=dirname(fileURLToPath(import.meta.url));
//settings
app.set('port', process.env.PORT || 3000);
app.set('views',join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.get('/',(req,res)=>{
  res.render("index")
})

app.use(personasRoutes);

//static files
app.use(express.static(join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});