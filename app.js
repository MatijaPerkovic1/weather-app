const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (!process.argv[2]) return console.log('Please provide location!');

geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (error) {
        return console.log(error);
    };

    forecast(latitude, longitude, (error, { weather_description, temperature, precip }) => {
        if (error) {
            return console.log(error);
        };
        
        console.log(location);
        console.log(`${weather_description}. It is currently ${temperature} degrees out. There is ${precip}% chance of rain.`);
    });
});
