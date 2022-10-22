const models = require('../models');

module.exports = {

    getUserData: async (req, res) => {
        try {
            console.log('request ', req.query);
            const email = req.query.user_email;
            const data = await models.read.getUserData([email]);
            res.status(200).send(data.rows);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getConnections: async (req, res) => {
        try {
            console.log(req.query);
            const userId = req.query.user_id, pairing = req.query.pairing;
            const connections = await models.read.getConnections([userId, pairing]);
            res.status(200).send(connections.rows);
        } catch (err) {
            res.status(500).send(err);
        }
    },
};