import React from "react";

export default function Button(props) {
  return <button style={styles.button}>{props.text}</button>;
}
const styles = {
  button: {
    width: 240,
    height: 40,
    backgroundColor: "white",
    borderRadius: 50,
    marginTop:10,
    color:'black',
  
  },
};
