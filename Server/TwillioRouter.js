const Twilio = require('twilio');
const config = require('../Twillio.config');
const Express = require('express');

// Map routes to controller functions
module.exports = function () {
    // Create an authenticated Twilio API client
    var client = new Twilio(config.accountSid, config.authToken);
    const router = Express.Router();

    app.post('/api/LostForm', (req, res) => {
        if (err) {
          console.log('error in app.post: ', err)
          res.send(500)
        } else {
          db.query(
            `INSERT INTO LostPets VALUES ('${req.body.OwnerName}', '${req.body.Email}', '${req.body.Phone}', '${req.body.PetName}', '${req.body.Collar}', '${req.body.size}', '${req.body.Friendliness}', '${req.body.LastZip}', '${req.body.LastSeen}', '${req.body.Photo}');`
          )
          .then(() => {
            axios({
              method: 'post',
              url: '/leads',
              host: 'localhost:3000'
            });
            res.sendStatus(200)
          })
        }
      })
    // Send lost notification
    router.post('/leads', function(request, response) {
        // Assemble a text message body
        var message = 'A pet has been lost in your area,' +
        ' please help us get our furry friend ' + 'petname' +
        ' back there parents. They were last Seen at ' + 'lastseen' + '.' +
        'petname' + ' has a' + 'collar' + 'on. If you find this friend' +
        'be sure to go to our website and select the found button' +  
        ' on the Home page beneath the pet\'s bio -Thanks from the Furry Friend Family';

        // Send lost notification to local
        client.messages.create({
            to: config.agentNumber,
            from: config.twilioNumber, 
            body: message
        })
        .then(() => {
          // Otherwise, respond with 200 OK
          response.status(200).send('Lost Pet Notification setup');
        })
        .catch((err) => {
          console.error(err);
          response.status(500).send();
        })
    });

    return router;
};