const request = require('request');

const url = '';

request(
    {
        url: url,
        json: true
    }, 
    (error, response) => {
        if(error) {
            console.log('Unable to connect to weather service!');
            return;
        }

        if(response.body.error) {
            console.log('Unable to find location!');
            return;
        }

        const { temperature, precip, weather_descriptions } = response.body.current;
        
        console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is ${precip}% chance of rain.`);
});

const geocodingUrl = '';

request(
    {
        url: geocodingUrl,
        json: true
    }, 
    (error, response) => {
        if(error) {
            console.log('Unable to connect to location services!');
            return;
        }
        if(!response.body.features[0]) {
            console.log('Unable to find location!');
            return;
        }

        const { center } = response.body.features[0];
        
        console.log(center);
});