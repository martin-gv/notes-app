import React from "react";
import styles from "./Main.module.scss";

import Sidebar from "./Sidebar/Sidebar";
import ContentArea from "./ContentArea/ContentArea";

function Main() {
  return (
    <div className={styles.Main}>
      <Sidebar />
      <ContentArea />
    </div>
  );
}

export default Main;
  