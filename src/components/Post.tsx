import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";

import styles from "./Post.module.css";
import { db } from "../firebase";
import { selectUser } from "../features/userSlice";

const Post = () => {
  return <div></div>;
};

export default Post;
