import React, { createContext, useContext, memo, useState } from "react";
import cloneDeep from "clone-deep";
import "./index.css";
import { CancelIcon, SaveIcon } from "../../icons";
// import { HomeContext } from "../../../screens/home";
import { HomeContext } from "../../../screens/home";
export const CreateTagCardInput = (props) => {
  const {
    // currentTagCard,
    setIsModalOpen,
    currentTagCardIdx,
    setCurrentTagCardIdx,
    tagCardList,
    setTagCardList,
  } = useContext(HomeContext);

  // const currentTagCard = tagCardList[currentTagCardIdx];

  const [input, setInput] = useState({ title: null, url: null, tags: [] });
  const [tagName, setTagName] = useState("");
  console.log("kinda magic2", currentTagCardIdx);

  // const addTag = () => {
  //   console.log(input);

  //   let copy = cloneDeep(input);
  //   copy.tags.push(tagName);
  //   // copy.tags.splice(index, 1);
  //   setInput(copy);
  //   setTagName("");
  // };

  // const saveTagCard = () => {
  //   let copy = cloneDeep(tagCardList);
  //   copy[currentTagCardIdx] = input;
  //   setTagCardList(copy);
  //   setIsModalOpen(false);
  // };
  const Tag = ({ innerText, index }) => {
    return <div className="tag"># {innerText}</div>;
  };
  return (
    <div className="tagGenerator">
      <div className="tagGenerator__container">
        <div className="bookmarkWrapper">
          <div className="label">URL</div>
          <input
            className="input"
            type="text"
            name="url"
            placeholder="Place your URL here!"
            value={input.url}
            onChange={(val) => {
              let copy = cloneDeep(input);
              copy.url = val.target.value;
              setInput(copy);
            }}
          />
        </div>
        <div className="tagAndTitleWrapper">
          <div className="tagWrapper">
            <div className="label">TAG</div>
            <input
              className="input"
              type="text"
              name="tag"
              placeholder="Add Tag"
              value={tagName}
              onChange={(val) => setTagName(val.target.value)}
            />
            <button
              className="add__button"
              onClick={() => {
                let copy = cloneDeep(input);
                copy.tags.push(tagName);
                setInput(copy);
                setTagName("");
              }}
            >
              Add
            </button>
          </div>
          <div className="titleWrapper">
            <div className="label">TITLE</div>
            <input
              className="input"
              type="text"
              name="title"
              value={input.title}
              placeholder="Place your Title here!"
              onChange={(val) => {
                let copy = cloneDeep(input);
                copy.title = val.target.value;
                setInput(copy);
              }}
            />
          </div>
        </div>

        <div className="tags__container">
          <div className="tag__label">#YourTags</div>
          {input.tags.length > 0 ? (
            input.tags.map((item, index) => {
              return <Tag innerText={item} key={"Tag" + index} index={index} />;
            })
          ) : (
            <div className="tag"># sampleTag</div>
          )}
        </div>
      </div>

      <button
        className="save__button"
        onClick={() => {
          // this.props.submitNewURL();
          console.log("hi");
          let copy = cloneDeep(tagCardList);
          copy.push(input);
          // tagCardList, setTagCardList, setInput({});
          setTagCardList(copy);
          setInput({ title: "", url: "", tags: [] });
          setTagName("");
        }}
      >
        Save
      </button>
    </div>
  );
};
