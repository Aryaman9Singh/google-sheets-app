import React from "react";
import Navbar from "../components/NavBar";
export default function Subscriptions() {
  return (
    <div style = {styles.container}>
      <Navbar />
      <div>Subscriptions</div>
 
    </div>
  );
}
const styles = {
  container:{
    marginTop:'5%',
  },
  button: {
    width: "200",
  },
};
