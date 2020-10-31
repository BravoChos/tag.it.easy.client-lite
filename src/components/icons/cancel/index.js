import React from "react";
import "./index.css";
export const CancelIcon = ({ color, size, onPress, style }) => {
  const onClick = () => {
    if (onPress) {
      onPress();
    }
  };
  // console.log(styl, "SDLKFJ");
  return (
    <div style={style ? style : null} onClick={onClick}>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        height={size ? size : "1em"}
        width={size ? size : "1em"}
        viewBox="0 0 512 512"
        // style="enable-background:new 0 0 512 512;"
        // xml:space="preserve"
      >
        <g>
          <g>
            <path
              fill={color ? color : "white"}
              d="M257,0C116.39,0,0,114.39,0,255s116.39,257,257,257s255-116.39,255-257S397.61,0,257,0z M383.22,338.79
       c11.7,11.7,11.7,30.73,0,42.44c-11.61,11.6-30.64,11.79-42.44,0L257,297.42l-85.79,83.82c-11.7,11.7-30.73,11.7-42.44,0
       c-11.7-11.7-11.7-30.73,0-42.44l83.8-83.8l-83.8-83.8c-11.7-11.71-11.7-30.74,0-42.44c11.71-11.7,30.74-11.7,42.44,0L257,212.58
       l83.78-83.82c11.68-11.68,30.71-11.72,42.44,0c11.7,11.7,11.7,30.73,0,42.44l-83.8,83.8L383.22,338.79z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
