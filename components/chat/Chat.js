import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
const Chat = ({ id, users }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const [recepientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );
  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  const recepientEmail = getRecipientEmail(users, user);
  const recipient = recepientSnapshot?.docs?.[0]?.data();

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recepientEmail[0]}</UserAvatar>
      )}

      <p>{recepientEmail}</p>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  word-break: break-word;
  padding: 15px;
  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
