require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*', methods: ["GET", "POST"], credentials: true }));
app.use(cookieParser());
app.use(express.static('public'));

const loginRoute = require('./roues/auth');
const usersRoute = require('./roues/users');
// const barberRoute = require('./roues/barbers');
// const appointmentRoute = require('./roues/appointments');

// mongoose.connect(process.env.LOCAL_DATA_BASE_URL, { useNewUrlParser:true });
mongoose.connect(process.env.DATA_BASE_URL, { useNewUrlParser:true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('connected!'))


app.use('/auth', loginRoute);
app.use('/users', usersRoute);
// app.use('/barbers', barberRoute);
// app.use('/appointments', appointmentRoute);

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`running on ${PORT}`));
