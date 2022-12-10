const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cookieParser());

// app.use(cors({ credentials: true, origin: true }));  //use this when sending and receiving cookies via header instead of body
// also use withCredentials : true with axios in your frontend app when dealing with cookies via headers.
app.use(cors()); //comment this out when using cookies via header

app.use(express.json());

//import routes
const auth = require('./routes/auth.js');
const fetchUsername = require('./routes/fetchUsername.js');
const attendanceFetch = require('./routes/attendance.js');
const detailedAttendance = require('./routes/detailedAttendance.js');
const marks = require('./routes/marks.js');
const logout = require('./routes/logout');

//use routes
app.use('/api/v1', auth);
app.use('/api/v1', attendanceFetch);
app.use('/api/v1', detailedAttendance);
app.use('/api/v1', fetchUsername);
app.use('/api/v1', marks);
app.use('/api/v1', logout);


app.listen(PORT);