import React, { useState, useContext } from "react";
import cloneDeep from "clone-deep";
// import { SearchBox } from "../../components/icons";
import { TagCard } from "../../cards";
import { HomeContext } from "../../../screens/home";
// import "./index.css";
export const ListTagCards = (props) => {
  // mobx - fetch Urls from server

  const {
    tagCardList,
    setTagCardList,
    currentTagCard,
    setCurrentTagCard,
  } = useContext(HomeContext);

  const editCard = (elem, idx) => {
    console.log("editCard", elem, idx);
    props.setIsOpen(true);
    setCurrentTagCard(elem);
  };

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
            editCard={() => editCard(item, index)}
            item={item}
            key={"tagCard" + index}
          />
        );
      })}
    </>
  );
};
