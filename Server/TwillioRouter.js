const Express = require('express');
const Twilio = require('twilio');
const config = require('../Twillio.config');
const db = require('./db.js')
const axios = require('axios');


// Map routes to controller functions
module.exports = function () {
    // Create an authenticated Twilio API client
    var client = new Twilio(config.accountSid, config.authToken);
    const app = Express();

    app.post('/api/LostForm', (req, res) => {
        db.query(
            `INSERT INTO LostPets VALUES ('${req.body.OwnerName}', '${req.body.Email}', '${req.body.Phone}', '${req.body.PetName}', '${req.body.Collar}', '${req.body.size}', '${req.body.Friendliness}', '${req.body.LastZip}', '${req.body.LastSeen}', '${req.body.Photo}');`
        )

        const body = req.body
        axios({
            method: 'post',
            url: '/leads',
            data: body,
            proxy: {
                port: 3000,
            }

        })
        .then((data) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('error in axios request to /leads:', err);
            res.send(500);
        })
    });
    
    // Send lost notification
    app.post('/leads', function (req, res) {
        // Assemble a text message body
        var message = 'A pet has been lost in your area,' +
            ' please help us get our furry friend ' + req.body.PetName +
            ' back to their parents. They were last Seen at ' + req.body.LastSeen + '. ' +
            req.body.PetName + ' has a ' + req.body.Collar + ' collar on. If you find this friend ' +
            'be sure to go to our website and select the found button' +
            ' on the Home page beneath the pet\'s bio -Thanks from the Furry Friend Family';
        console.log(message, "-----go to TwillioRouter and uncomment 48-60 to get messages sending-----")
            res.send(200);
        // Send lost notification to local
        client.messages.create({
            to: config.agentNumber,
            from: config.twilioNumber,
            body: message
        })
            .then(() => {
                // Otherwise, respond with 200 OK
                res.status(200).send('Lost Pet Notification sent');
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send();
            })
    });

    app.get('/api/Pets',  (req, res) => {

      const lostPetList = db.query('SELECT * FROM LostPets', (err, data) => {
         if(err) {
             console.log(err);
             res.send(500)
         } else {
             res.send(data);
         }
      });
          
         
    })

    return app;
};