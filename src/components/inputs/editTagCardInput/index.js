import React, { createContext, useContext, memo, useState } from "react";
import cloneDeep from "clone-deep";
import "./index.css";
import { CancelIcon, SaveIcon } from "../../icons";
// import { HomeContext } from "../../../screens/home";
import { HomeContext } from "../../../screens/home";
export const EditTagCardInput = (props) => {
  const {
    // currentTagCard,
    setIsModalOpen,
    currentTagCardIdx,
    setCurrentTagCardIdx,
    tagCardList,
    setTagCardList,
  } = useContext(HomeContext);

  const currentTagCard = tagCardList[currentTagCardIdx];

  const [input, setInput] = useState(currentTagCard);
  const [tagName, setTagName] = useState("");
  console.log("kinda magic", currentTagCardIdx, input);

  const addTag = () => {
    console.log(input);

    let copy = cloneDeep(input);
    copy.tags.push(tagName);
    // copy.tags.splice(index, 1);
    setInput(copy);
    setTagName("");
  };

  const saveTagCard = () => {
    let copy = cloneDeep(tagCardList);
    copy[currentTagCardIdx] = input;
    setTagCardList(copy);
    setIsModalOpen(false);
  };

  const Tag = ({ innerText, index }) => {
    return (
      <div className="tagCard__tag__edit">
        <div># {innerText}</div>
        <CancelIcon
          style={{
            // display: "flex",
            // flexDirection: "column",
            // borderWidth:1
            padding: "0 0 0 .3em",
          }}
          color={"red"}
          onPress={() => {
            let copy = cloneDeep(input);
            copy.tags.splice(index, 1);
            setInput(copy);
          }}
        />
      </div>
    );
  };

  return (
    <div className="editor">
      <div className="editor__title">Edit TagCard</div>

      <input
        className="editor__input"
        type="text"
        name="title"
        value={input.title}
        // placeholder="Place your URL here!"
        onChange={(val) => {
          let copy = cloneDeep(input);
          copy.title = val.target.value;
          setInput(copy);
        }}
      />

      <input
        className="editor__input"
        type="text"
        name="url"
        value={input.url}
        onChange={(val) => {
          let copy = cloneDeep(input);
          copy.url = val.target.value;
          setInput(copy);
        }}
      />
      <div className="editor__tagWrapper">
        <div className="editor__label">TAG</div>

        <input
          className="input"
          type="text"
          name="tag"
          placeholder="Add Tag"
          value={tagName}
          onChange={(val) => setTagName(val.target.value)}
        />
        <button className="add__button" onClick={addTag}>
          Add
        </button>
        <SaveIcon
          style={{
            padding: "0 0.5em",

            alignItems: "center",

            display: "flex",
            flexDirection: "column",
          }}
          onPress={saveTagCard}
        />
        <CancelIcon
          onPress={() => setIsModalOpen(false)}
          size={"1.5em"}
          style={{
            alignItems: "center",

            display: "flex",
            flexDirection: "column",
          }}
          color={"red"}
        />
      </div>
      <div className="tagCard__tags">
        {input.tags.map((item, index) => {
          return <Tag innerText={item} key={"Tag" + index} index={index} />;
        })}
      </div>
    </div>
  );
};
