const express = require('express');
const route = require('./routes');
const app = express();

//DB연결 작업
const sequelize = require('./models').sequelize;
sequelize.sync();

// app.use('/', (req, res, next) => {
//   res.send('root');
//   //console.log('express middleware'); //console.log 안보이는 이유?
// });

app.use('/', route);

app.listen(3000, () => {
  console.log('3000port');
});
