const Dev = require('../models/Dev');
const parseStringAsArray = require('./utils/parseStringAsArray');

module.exports = {
    async index(req, res){ 
        const { latitude, longitude, techs } = req.query;

        const devs = await Dev.find({
            techs: {
                $in: parseStringAsArray(techs, true)
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000 //filtro de 10km da sua localização
                }
            }
        });

        return res.json({devs});
    }
}