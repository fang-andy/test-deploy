const Airtable = require('airtable');
const base = new Airtable({
    apiKey: 'keyoT7qZIXjOINfcE',
    endpointUrl: 'https://proxy.sequin.io/api.airtable.com'
}).base('appTzwoikQNTG7jZX');

module.exports = {
    updateBucketListStatus: (input) => {
        const { id, boolean } = input;
        return base('Bucket_List').update([
            {
                "id": id,
                "fields": { "Checked": boolean }
            }
        ])
    }
}