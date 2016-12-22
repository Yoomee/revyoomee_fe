const bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/v1/users', function(req, res) {
    return res.status(200).send({
      data: [
        { id: 1, type: 'user', attributes: { name: 'Bob' } },
        { id: 2, type: 'user', attributes: { name: 'Martin' } }
      ]
    });
  });
};
