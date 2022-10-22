const models = require('../models');

module.exports = {

	postBucketListItem: async (req, res) => {
		try {
			console.log('request body ', req.body);
			const data = await models.create.postBucketListItem(req.body);
			res.status(201).send(data[0].id);
		} catch (err) {
			res.status(500).send(err);
		}
	},


    postTimelineUpdate: async (req, res) => {
        console.log(req.body);
        try {
            const data = await models.create.postTimelineUpdate(req.body);
            res.status(201).send(data);
        } catch (err) {
            res.status(500).send(err);
        }
    }
};