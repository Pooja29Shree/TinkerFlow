const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');


const subjectRoutes = require('./routes/subjectRoutes');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Body:", req.body);
  }
  
  next();
});


app.use('/api/subjects', subjectRoutes);
app.use('/api/quiz',quizRoutes);
app.use('/api/auth',authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
