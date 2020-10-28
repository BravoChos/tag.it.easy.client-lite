import React from "react";
import { DeleteIcon, EditIcon } from "../../icons";
import "./index.css";

export const TagCard = ({ onPress, item: { url, tags, title }, editCard }) => {
  const Tag = ({ innerText }) => {
    return <div className="tagCard__tag"># {innerText}</div>;
  };

  return (
    <div className="tagCard">
      <div className="tagCard__title">
        <div>{title}</div>
        <div className="tagCard__btns">
          <EditIcon onPress={editCard} />
          <DeleteIcon onPress={onPress} />
        </div>
      </div>
      <div className="tagCard__url">{url}</div>

      <div className="tagCard__tags">
        {tags.map((item, index) => {
          return <Tag innerText={item} key={"Tag" + index} />;
        })}
      </div>
    </div>
  );
};
