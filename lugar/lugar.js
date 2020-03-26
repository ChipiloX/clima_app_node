const axios = require('axios');

const getLugarLatLng = async(direccion) => {


    const encodeX = encodeURI(direccion);
    //console.log(encodeX);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeX}`,
        headers: { 'x-rapidapi-key': 'be61cd7014msh81de040521ce6e3p1b4a0djsn2621c9108237' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const direccion2 = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion2,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}