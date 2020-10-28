import React, { createContext, useContext, memo } from "react";
import "./index.css";
import { CancelIcon, SaveIcon } from "../../icons";
// import { HomeContext } from "../../../screens/home";
import { HomeContext } from "../../../screens/home";
export const EditTagCardInput = (props) => {
  const { currentTagCard, setCurrentTagCard } = useContext(HomeContext);
  console.log("kinda magic", currentTagCard);

  const Tag = ({ innerText }) => {
    return (
      <div className="tagCard__tag__edit">
        <div># {innerText}</div>
        <CancelIcon color={"red"} />
      </div>
    );
  };

  return (
    <div className="Editor">
      <div className="cancelIcon">
        <SaveIcon />
        <CancelIcon onPress={props.onPress} />
      </div>

      <div className="tagCard">
        <input
          className="input"
          type="text"
          name="url"
          value={currentTagCard.title}
          // placeholder="Place your URL here!"
          // onChange={this.props.urlChange}
        />

        <input
          className="input"
          type="text"
          name="url"
          value={currentTagCard.url}
          // placeholder="Place your URL here!"
          // onChange={this.props.urlChange}
        />
        <div className="tagWrapper">
          <div className="label">TAG</div>
          <input
            className="input"
            type="text"
            name="url"
            placeholder="Add Tag"
            // onChange={this.props.urlChange}
          />
          <button className="add__button">Add</button>
        </div>
        <div className="tagCard__tags">
          {currentTagCard.tags.map((item, index) => {
            return <Tag innerText={item} key={"Tag" + index} />;
          })}
        </div>
      </div>
    </div>
  );
};
