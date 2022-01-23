const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (!process.argv[2]) return console.log('Please provide location!');

geocode(process.argv[2], (error, data) => {
    if (error) {
        return console.log(error);
    };

    forecast(data.latitude, data.longitude, (error, response) => {
        if (error) {
            return console.log(error);
        };
        
        console.log(data.location);
        console.log(`${response.weather_description}. It is currently ${response.temperature} degrees out. There is ${response.precip}% chance of rain.`);
    });
});
