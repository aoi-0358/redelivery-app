import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ChatsType } from "../dataset";
import { Chat } from "/Users/okamuraao/Desktop/redelivery-app/src/components/index";

const useStyles = makeStyles((theme) =>
  createStyles({
    chats: {
      height: 400,
      padding: "0",
      overflow: "auto",
    },
  })
);

// chats = [{  text: string;  type?: string}, {  text: string;  type?: string}...]


// props => chats: [{  text: string;  type?: string}, {  text: string;  type?: string}...]
const Chats = (props: { chats: ChatsType }) => {
  const { chats } = props;
  const classes = useStyles();
  return (
    <List className={classes.chats} id={"scroll-area"}>
      {chats.map((chat, index) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
};

export default Chats;
