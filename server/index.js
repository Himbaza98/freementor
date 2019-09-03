import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoute';
import bcrypt from 'bcrypt';
import menteeRoute from './routes/menteeRoute'


const app = express();
const port = process.env.PORT || 507;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', userRoutes);
app.use('/api/v1', menteeRoute);


app.listen(port, console.log(`you are listening on port ${port}...`))