import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoute';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', userRoutes);

app.listen(PORT, console.log("you are listening on port 5000"))