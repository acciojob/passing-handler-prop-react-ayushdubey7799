import React from "react";
import { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
   let [selectionStyle, updateSelectionStyle] = useState({background: "orange"});
   
   let color = props.nextBackground;

   return <div className = "fix-box" onClick={() => updateSelectionStyle(color)} style={{backgroundColor: selectionStyle.background}}>Selection</div>
}

export default Selection
