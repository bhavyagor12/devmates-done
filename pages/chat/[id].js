import Head from "next/head";
import React from "react";
import styled from "styled-components";
import ChatScreen from "../../components/chat/ChatScreen";
import Sidebar from "../../components/chat/Sidebar";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";
import Navbar from "../../components/Navbar";
const Chat = ({ chat, messages }) => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar />
      <Container>
        <Head>
          <title>Chat with {getRecipientEmail(chat.users, user)}</title>
        </Head>

        <Sidebar />
        <ChatContainer>
          <ChatScreen chat={chat} messages={messages} />
        </ChatContainer>
      </Container>
    </div>
  );
};

export default Chat;

export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);

  //prep the msgs

  const messageRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

  const messages = messageRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  //prep the chats

  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 90vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
