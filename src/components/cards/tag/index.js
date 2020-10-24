import React from "react";
import { DeleteIcon, EditIcon } from "../../icons";
import "./index.css";

export const TagCard = (props) => {
  console.log("tagCard");

  const Tag = ({ innerText }) => {
    return <div className="tagCard__tag"># {innerText}</div>;
  };

  return (
    <div className="tagCard">
      <div className="tagCard__title">
        <div>자바스크립트_스타일 가이드</div>
        <div className="tagCard__btns">
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
      <div className="tagCard__url">http://localhost:3000/</div>
      <div className="tagCard__tags">
        <Tag innerText={'Javascript'}/>
        <Tag innerText={'Docs'}/>
        <Tag innerText={'ECMA'}/>
      </div>
    </div>
  );
};
