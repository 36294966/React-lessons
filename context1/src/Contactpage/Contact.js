import React from "react";
import { useBackgroundColor } from "../BackgroundColorContext";
import "./Contact.css";
const Contact = () => {
  const { backgroundColor, setBackgroundColor } = useBackgroundColor();

  return (
    <div style={{ backgroundColor, height: "100vh" }}>
      <h1>Contact Page</h1>
      <button onClick={() => setBackgroundColor("blue")}>
        Change Background to blue
      </button>
      <p>The current background color is {backgroundColor}.</p>
    </div>
  );
};

export default Contact;
