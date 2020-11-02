import React from "react";


export const MainImg = (props) => (
<div className="main-img">
        {props.items.map(item => (
            <div className="imagem">
                <img src={item.imgs} alt={item.alt}></img>
            </div>
        ))}
  </div>
);


