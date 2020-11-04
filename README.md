# FindMyFurryFriend
Find My Furry Friend is a social application designed to alert others in your area that your pet has gotten away. It will send a message via SMS or through the app depending on your choice of set up. This messages will include things like your pets name, a picture, and how friendly they might be. It is designed to get the news out quickly and have others searching for your best friend ensuring they come back safe and sound.

## Built With
React
Node
Express
MySQL
Babel
Webpack
Axios
Twilio

## Getting Started
1. Clone from GitHub
2. npm install
3. Start trial with Twilio https://www.twilio.com/login
  * A. get API key and Token
  * B. Setup Twillio.config.js (https://github.com/TwilioDevEd/lead-alerts-node/blob/main/config.js)
4. Setup MySQL
  * A. Create a new database named `'furryfriend'`
  * B. Create new table named `'LostPets'`

## Contributing
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

# API DOCS
examples from Find My Furry Friend

## Open Endpoints
Open Endpoints require no Authentication

* Add to lost pets in the database: `Post /api/LostForm`
* Retrieve List of pets: `Get /api/Pets`

## Endpoints that require Authentication
* Send SMS: `Post /leads` (this requires Twilio.Config.js to be set up )

## Contact
Logan Smith - Lsmith2895@gmail.com
Profile - https://github.com/Lsmith2895
LinkedIn - https://www.linkedin.com/in/logansmith2895/
