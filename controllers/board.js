exports.boardWrite = (req, res, next) => {
  res.status(200).send('boardWrite');
  console.log('boardWrite');
};

exports.boardRead = (req, res, next) => {
  res.send('boardRead');
  console.log('boardRead');
};

exports.boardDelete = (req, res, next) => {
  res.send('boardDelete');
  console.log('boardDelete');
};

exports.boardChange = (req, res, next) => {
  res.send('boardChange');
  console.log('boardChange');
};
