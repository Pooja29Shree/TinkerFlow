const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');


const subjectRoutes = require('./routes/subjectRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());



app.use('/api/subjects', subjectRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
