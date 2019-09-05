import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoute';
import menteeRoute from './routes/menteeRoute'
import sessionRoute from './routes/sessionRoute'

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', userRoutes);
app.use('/api/v1', menteeRoute);
app.use('/api/v1', sessionRoute);


app.listen(port, console.log(`you are listening on port ${port}...`))