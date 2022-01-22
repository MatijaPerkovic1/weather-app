const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('Dugo Selo', (error, data) => {
    if (error) {
        return console.log(error);
    };

    forecast(data.latitude, data.longitude, (error, response) => {
        if (error) {
            return console.log(error);
        };
    
        console.log(`${response.weather_description}. It is currently ${response.temperature} degrees out. There is ${response.precip}% chance of rain.`);
    });
});
