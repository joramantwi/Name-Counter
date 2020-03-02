const express = require('express')
const app = express()
const morgan = require('morgan'); 
const namesRoute = require('./name-count');

app.use(morgan('dev'));

// handling CORS errors 
app.use((req, res, next) => {
  res.header('Acess-Control-Allow-Orgin', '*');
  res.header('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method ==='OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'GET');
      return res.status(200).json({});
  }
  next(); 
});


app.use('/name-count', namesRoute)

app.get('/', (req, res) => {
    res.send('Hello this is the home endpoint.  '+
    'Use localhost:4000/name-count to switch to name-count route'
    )
}); 


app.use((req, res, next) => {
  const error = new Error('Endpoint not found');
  error.status = 404;
  next(error); 
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  });
});


const port = 4000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});