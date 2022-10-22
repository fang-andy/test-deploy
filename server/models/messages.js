const StreamChat = require('stream-chat').StreamChat;

require('dotenv').config({ path: '.env' });

const serverClient = StreamChat.getInstance(process.env.STREAM_API_KEY, process.env.STREAM_SECRET);

const token = serverClient.createToken('fang-andy');

console.log(token);