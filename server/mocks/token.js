const bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/v1/token', function(req, res) {

    if (req.body.username == 'login' && req.body.password == 'ok') {
      res.send({ access_token: "some bs" });
    } else {
      res.status(400).send({ error: "invalid_grant" });
    }

  });
};
