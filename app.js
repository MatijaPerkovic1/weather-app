const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=f459f4c41ce7f93f765c82a0f2bf21be&query=37.8267,-122.4233';

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current.temperature);
});

