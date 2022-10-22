require('dotenv').config({ path: '.env' });
const Airtable = require('airtable');
// console.log(process.env.AIRTABLE_API_KEY);
const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
    endpointUrl: 'https://proxy.sequin.io/api.airtable.com'
}).base(process.env.AIRTABLE_BASE);

module.exports = {

    postBucketListItem: (input) => {
        const { name, pairing } = input;
        return base('Bucket_List').create([
            {
                "fields": {
                    "Name": name,
                    "Pairings": [pairing]
                }
            }
        ])
    },

    postTimelineUpdate: (input) => {
        const { user_id, pairing, name } = input;
        return base('Timeline').create([
            {
                "fields": {
                    "User": [user_id],
                    "Name": name,
                    "Pairing": [pairing],
                }
            }
        ])
    }

}