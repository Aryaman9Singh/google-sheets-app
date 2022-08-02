import React from "react";
import Navbar from "../components/NavBar";
import Logout from "../Logout";
const Dashboard = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.parentDiv}>
        <div style={styles.sidebar}>sidebar for sheets</div>
        <div style={styles.sheetDisplay}>Sheets will appear here</div>
        <div style={styles.childDiv3}>
          <button style={styles.button}>View Subscriptions</button>
          <Logout />
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    marginTop: "5%",
  },
  button: {
    background: "#ededed",
    border: "none",
    outline: "none",
    cursor: PointerEvent,
    opacity: "1",
    color: "black",
  },
  parentDiv: {
    display: "flex",
  },
  sidebar: {
    flex: 1,
    margin: 10,
  },
  sheetDisplay: {
    flex: 3,

    margin: 10,
  },
  childDiv3: {
    flex: 1,

    margin: 10,
  },
};

export default Dashboard;
