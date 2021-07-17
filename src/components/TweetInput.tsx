import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";

import styles from "./TweetInput.module.css";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

const TweetInput = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Avatar
        className={styles.tweet_avatar}
        src={user.photoUrl}
        onClick={async () => {
          await auth.signOut();
        }}
      />
    </div>
  );
};

export default TweetInput;
