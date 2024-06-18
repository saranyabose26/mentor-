import express from 'express';
import dotenv from 'dotenv';
import appRoutes from './src/routes/index.js';

dotenv.config();

const PORT = parseInt(process.env.PORT); // Parse PORT as an integer
const app = express();

app.use(express.json());
app.use('/', appRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
