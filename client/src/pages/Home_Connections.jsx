import React, { useEffect, useState } from "react";
import Connections_Sidebar from "../containers/Connections_Sidebar";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
  ChannelList
} from "stream-chat-react";
import { HStack } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom'

import 'stream-chat-react/dist/css/index.css'

import { useDispatch, useSelector } from 'react-redux';

const apiKey = 'auzuk5wj2cb8';

// prefill here
// const { user_id, full_name, photo } = useSelector(state => state.user);
// const user = {
//   id: user_id,
//   name: full_name,
//   image: photo
// }

const user = {
  id: 'kevin',
  name: 'Kevin',
  image: 'https://getstream.io/random_png/?id=noisy-tree-2&name=noisy-tree-2'
}
const filters = { type: 'messaging', members: { $in: [user.id] } };


const Home_Connections = () => {
  const sort = { last_message_at: -1 };
  const location = useLocation();
  const [client, setClient] = useState(null);
  // console.log('pairing: ', location.state.pairing)

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel('messaging', 'custom_channel_id', {
        image: 'https://www.drupal.org/files/project-images/react.png',
        name: 'Career Development',
        members: [user.id]
      })

      await channel.watch();

      setClient(chatClient);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, [])

  if (!client) return <LoadingIndicator />;

  return (
    <>
      <HStack
        justifyContent="space-between"
        w="100%"
      >
        <Chat client={client} theme="messaging light">
          <ChannelList
            filters={filters}
            sort={sort}
          />
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>

        <Connections_Sidebar id={location.state.id} photo={location.state.photo} about={location.state.about} job={location.state.job} name={location.state.name} pairing={location.state.pairing} />

      </HStack>
    </>
  )
}

export default Home_Connections;