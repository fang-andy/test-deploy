const router = require('express').Router();
const path = require('path');
const controllers = require('../controllers');
const { requiresAuth } = require('express-openid-connect');


router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// router.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '..', '../client/dist/index.html'), (err) => {
//         if (err) res.status(500).send(err);
//     })
// })

router.get('/profile', requiresAuth(), (req, res) => {
    console.log('req.oidc.user: ', req.oidc.user.email)
    res.send(JSON.stringify(req.oidc.user));
});

router.get('/home', controllers.read.getUserData);

router.get('/connect', controllers.read.getConnections);

router.post('/bucket-list', controllers.create.postBucketListItem);

router.post('/timeline', controllers.create.postTimelineUpdate);

router.put('/bucket-list', controllers.update.updateBucketListStatus);

module.exports = router;