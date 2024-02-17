//Express
const express = require('express');

//Middleware
//cors?

//Router
const router = require('./routes.js')


const app = express();
const PORT = 3000 || process.env.PORT;

app.use('/movies', router);

app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
