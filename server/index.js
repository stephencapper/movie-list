//Express
const express = require('express');

//Middleware
//cors?
const cors = require('cors');

//Router
const router = require('./routes.js')


const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/movies', router);

app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
