import React, { useContext } from "react";
import cloneDeep from "clone-deep";
import { DeleteIcon, EditIcon } from "../../icons";
import { HomeContext } from "../../../screens/home";
import "./index.css";

export const TagCard = ({ item: { url, tags, title }, index }) => {
  const {
    setIsModalOpen,
    tagCardList,
    setTagCardList,
    setCurrentTagCardIdx,
  } = useContext(HomeContext);

  const editCard = () => {
    setIsModalOpen(true);
    setCurrentTagCardIdx(index);
  };
  const deleteCard = () => {
    let copy = cloneDeep(tagCardList);
    copy.splice(index, 1);
    setTagCardList(copy);
  };

  const Tag = ({ innerText }) => {
    return <div className="tagCard__tag"># {innerText}</div>;
  };

  return (
    <div className="tagCard">
      <div className="tagCard__title">
        <div>{title}</div>
        <div className="tagCard__btns">
          <EditIcon onPress={editCard} />
          <DeleteIcon onPress={() => deleteCard()} />
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
