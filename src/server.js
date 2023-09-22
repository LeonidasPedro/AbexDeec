import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import routes from './routes';
import cors from 'cors';
require('./models/index');

const app = express();

const acessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
);

const corsOptions = {
    origin: function (origin, callback) {
        callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('combined', { stream: acessLogStream }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

routes(app);
app.use((req, res) => 
    res.status(404).send("404 - Página não encontrada " + req.url)
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
export default app;