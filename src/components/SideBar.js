import React from "react";

import "./SideBar.css";

export const SideBar = (props) => (
    <div className="side-bar">
        <ul>
            {props.items.map(item => (
                <li className="side-bar-li">
                    <a href={item.link} rel="noreferrer" target="_blank">{item.bar}</a>
                </li>
            ))}
        </ul>
      </div>
);
