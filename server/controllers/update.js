const models = require('../models');

module.exports = {

    updateBucketListStatus: async (req, res) => {
        try {
            const record = await models.update.updateBucketListStatus(req.body);
            res.status(200).send(record);
        } catch (err) {
            res.status(500).send(err);
        }
    },
}