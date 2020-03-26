const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0e686c593640d3c7e44e8828ef0c320e&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}