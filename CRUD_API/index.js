import  Express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usersRoutes from './routes/users.js';


// const cors = require('cors');
const app = Express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/', (req, res) => res.send('hello from homepage.'));

app.listen(PORT, () => console.log(`server Running on port: htpp://localhost${PORT}`));