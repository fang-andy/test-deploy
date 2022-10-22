const db = require('../db');

module.exports = {

    getUploads: (params) => {
        const query = `SELECT user, file, name, task, created, type, user_ 
      FROM uploads WHERE uploads.user_ = 'rec0CYm63zRfXZfjz'`
    },

    // need to update data type for mentee_user_from_pairings and mentor_user_from_pairings
    getBucketList: (params) => {
        const query = `SELECT name, recordid, checked, created, pairings, 
      mentee_user_from_pairings, mentor_user_from_pairings FROM bucket_list
      WHERE pairings = 'recAMZRk7D3zGS4D1'`
    },

    getTimeline: (params) => {
        const query = `SELECT name, user, pairing, icon, created FROM timeline WHERE pairing = 'recAMZRk7D3zGS4D1'`
    },

    getConnections: (params) => {
        const { userId, pairing } = params;
        const input = [userId, pairing];
        const query = `SELECT user, file, name, task, created, type, 
      (SELECT JSON_AGG(JSON_BUILD_OBJECT(
        'name', name, 'recordid', recordid, 'with', with_, 
        'checked', checked, 'created', created, 'pairings', pairings, 'mentee_user_from_pairings',mentee_user_from_pairings,
        'mentor_user_from_pairings', mentor_user_from_pairings
      )) 
      FROM bucket_list WHERE bucket_list.pairings = $2) AS bucket_list,
      (SELECT JSON_AGG(JSON_BUILD_OBJECT(
        'name', name, 'user', user, 'pairing', pairing, 'icon', icon, 'created', created
      ))
      FROM timeline WHERE timeline.pairing = $2) AS timeline
      FROM uploads WHERE uploads.user_ = $1`;
    }
}

/*
SELECT * FROM uploads 
LEFT JOIN timeline 
ON uploads.user_ = timeline.user_
LEFT JOIN buck_list
ON uploads.user_ = mentee_user_from_pairings
OR uploads.user_ = mentor_user_from_pairings
WHERE uploads.user_ = 'rec0CYm63zRfXZfjz';


pairing id = recAMZRk7D3zGS4D1
user id = rec0CYm63zRfXZfjz


-- SELECT DISTINCT u.user_, u.file, u.name, u.task, u.created, u.type, b.name, b.recordid, b.checked, b.created, b.pairings, 
--       b.mentee_user_from_pairings, b.mentor_user_from_pairings, t.name, t.pairing, t.icon, t.created
-- FROM uploads u
-- LEFT JOIN timeline t
-- ON u.user_ = t.user_
-- LEFT JOIN bucket_list b
-- ON b.pairings = t.pairing
-- WHERE u.user_ = 'rec0CYm63zRfXZfjz'
-- OR b.pairings = 'recAMZRk7D3zGS4D1';
*/