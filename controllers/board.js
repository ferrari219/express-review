exports.boardWrite = (req, res, next) => {
  res.status(200).send('boardWrite');
};

exports.boardRead = (req, res, next) => {
  res.send('boardRead');
};

exports.boardDelete = (req, res, next) => {
  res.send('boardDelete');
};

exports.boardChange = (req, res, next) => {
  res.send('boardChange');
};
