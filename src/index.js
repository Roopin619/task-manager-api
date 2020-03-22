require('dotenv').config({ path: '../.env' });
const express = require("express");
require('./db/mongoose.js');
const User = require('./models/user.js');
const Task = require('./models/task.js');
const userRouter = require('./routers/user.js');
const taskRouter = require('./routers/task.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);          // registered the router
app.use(taskRouter);          // registered the router

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});