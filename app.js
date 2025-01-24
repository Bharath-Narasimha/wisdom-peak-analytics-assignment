require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);

sequelize.sync({ force: false }).then(() => console.log('Database connected'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
