import React, { useState, useContext } from "react";
import { TagCard } from "../../cards";
import { HomeContext } from "../../../screens/home";

export const ListTagCards = (props) => {
  const { tagCardList } = useContext(HomeContext);
  return (
    <>
      {tagCardList.map((item, index) => {
        return <TagCard item={item} index={index} key={"tagCard" + index} />;
      })}
    </>
  );
};
