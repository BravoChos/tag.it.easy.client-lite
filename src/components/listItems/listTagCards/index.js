import React, { useState, useContext } from "react";
import cloneDeep from "clone-deep";
// import { SearchBox } from "../../components/icons";
import { TagCard } from "../../cards";
import { HomeContext } from "../../../screens/home";
// import "./index.css";
export const ListTagCards = (props) => {
  // mobx - fetch Urls from server

  const { tagCardList, setTagCardList } = useContext(HomeContext);

  const deleteCard = (idx) => {
    let copy = cloneDeep(tagCardList);
    copy.splice(idx, 1);
    setTagCardList(copy);
  };

  return (
    <>
      {tagCardList.map((item, index) => {
        return (
          <TagCard
            onPress={() => deleteCard(index)}
            setIsOpen={props.setIsOpen}
            item={item}
            key={"tagCard" + index}
          />
        );
      })}
    </>
  );
};
