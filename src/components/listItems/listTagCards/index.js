import React, { useState } from "react";
import cloneDeep from "clone-deep";
// import { SearchBox } from "../../components/icons";
import { TagCard } from "../../cards";
// import "./index.css";
export const ListTagCards = (props) => {
  // mobx - fetch Urls from server
  const [items, setItems] = useState([
    {
      title: "Song's Github",
      url: "https://github.com/DeepLearnerSC",
      tags: ["Code", "Song", "Github"],
    },
    {
      title: "Song's Linked-in",
      url: "https://www.linkedin.com/in/seonghyun-song-cho-84251654/",
      tags: ["Resume", "LinkedIn", "Profile"],
    },
    {
      title: "자바스크립트_스타일 가이드",
      url: "http://localhost:3000/",
      tags: ["Javascript", "Docs", "ECMA"],
    },
    {
      title: "Song's Github",
      url: "https://github.com/DeepLearnerSC",
      tags: ["Code", "Song", "Github"],
    },
    {
      title: "Song's Linked-in",
      url: "https://www.linkedin.com/in/seonghyun-song-cho-84251654/",
      tags: ["Resume", "LinkedIn", "Profile"],
    },
    {
      title: "자바스크립트_스타일 가이드",
      url: "http://localhost:3000/",
      tags: ["Javascript", "Docs", "ECMA"],
    },
    {
      title: "Song's Github",
      url: "https://github.com/DeepLearnerSC",
      tags: ["Code", "Song", "Github"],
    },
    {
      title: "Song's Linked-in",
      url: "https://www.linkedin.com/in/seonghyun-song-cho-84251654/",
      tags: ["Resume", "LinkedIn", "Profile"],
    },
    {
      title: "자바스크립트_스타일 가이드",
      url: "http://localhost:3000/",
      tags: ["Javascript", "Docs", "ECMA"],
    },
    {
      title: "Song's Github",
      url: "https://github.com/DeepLearnerSC",
      tags: ["Code", "Song", "Github"],
    },
    {
      title: "Song's Linked-in",
      url: "https://www.linkedin.com/in/seonghyun-song-cho-84251654/",
      tags: ["Resume", "LinkedIn", "Profile"],
    },
    {
      title: "자바스크립트_스타일 가이드",
      url: "http://localhost:3000/",
      tags: ["Javascript", "Docs", "ECMA"],
    },
  ]);

  const deleteCard = (idx) => {
    let copy = cloneDeep(items);
    copy.splice(idx, 1);
    setItems(copy);
  };

  return (
    <>
      {items.map((item, index) => {
        return (
          <TagCard
            onPress={() => deleteCard(index)}
            item={item}
            key={"tagCard" + index}
          />
        );
      })}
    </>
  );
};
