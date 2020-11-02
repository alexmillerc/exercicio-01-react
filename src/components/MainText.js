import React from "react";

import "./MainText.css"

export const MainText = (props) => (
<div className="main-text">
        {props.items.map(item => (
            <div className="container-text">
                <p>{item.text}</p>
            </div>
        ))}
  </div>
);