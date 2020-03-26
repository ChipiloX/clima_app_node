const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
//const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getClima(40.75000, -74.0000)
    .then(console.log)
    .catch(console.log);
*/
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        //console.log(coords.latitud);
        //console.log(coords.longitud);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        //console.log(temp);
        return `El clima de ${direccion} es de ${temp}`;

    } catch {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);