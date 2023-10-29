import React from "react";
import PageNotFound from "../assets/page-not-found.jpg";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
    <Asset
      src={PageNotFound}
      
    />
  </div>
  )
}

export default NotFound