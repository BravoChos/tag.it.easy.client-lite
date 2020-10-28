import React, { createContext, useState, memo } from "react";
import Modal from "react-modal";
import { SearchBox } from "../../components/icons";
import { ListTagCards } from "../../components/listItems";
import { EditTagCardInput } from "../../components/inputs";
import "./index.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: 300, //280
    // height:'100%',
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // margin: 0,
    padding: 0,
    // borderWidth: 10,
    transform: "translate(-50%, -50%)",
  },
};

export const HomeComponent = memo(() => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="Container">
      <header className="header">
        <img src={require("../../assets/img/logo.png")} alt="logo" />

        <div className="search__container">
          <input
            className="searchInput"
            type="text"
            placeholder="Search Title or Tag"
            // onChange={this.props.desChange}
          />

          <SearchBox size={"2em"} />
        </div>
      </header>

      <div className="tagGenerator">
        <div className="tagGenerator__container">
          <div className="bookmarkWrapper">
            <div className="label">URL</div>
            <input
              className="input"
              type="text"
              name="url"
              placeholder="Place your URL here!"
              // onChange={this.props.urlChange}
            />
          </div>
          <div className="tagAndTitleWrapper">
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
            <div className="titleWrapper">
              <div className="label">TITLE</div>
              <input
                className="input"
                type="text"
                name="url"
                placeholder="Place your Title here!"
                // onChange={this.props.urlChange}
              />
            </div>
          </div>
          <div className="bookmarkWrapper">
            <div className="label">#YourTags</div>
            <div className="tag">#IamSuperCool</div>
          </div>
        </div>

        <button
          className="save__button"
          onClick={() => {
            // this.props.submitNewURL();
            console.log("hi");
          }}
        >
          Save
        </button>
      </div>

      <div className="tagContainer">
        <div className="tagFilterWrapper">
          <div className="filter">
            <div className="filter__sub">
              <input
                type="radio"
                name="orderby"
                value="recent"
                checked="checked"
                // onClick={this.props.handleRadioChange}
              />
              <label>Recent</label>
            </div>
            <div className="filter__sub">
              <input
                type="radio"
                name="orderby"
                value="popular"
                // onClick={this.props.handleRadioChange}
              />

              <label>Popular</label>
            </div>
          </div>

          <div className="subtag">
            <input
              type="checkbox"
              name="checkbox"
              value="tag"
              // onClick={this.props.handleRadioChange}
            />

            <label>Popular (11)</label>
          </div>
          <div className="subtag">
            <input
              type="checkbox"
              name="checkbox"
              value="tag"
              // onClick={this.props.handleRadioChange}
            />

            <label>Popular (12)</label>
          </div>
          <div className="subtag">
            <input
              type="checkbox"
              name="checkbox"
              value="tag"
              // onClick={this.props.handleRadioChange}
            />

            <label>Popular (1)</label>
          </div>
        </div>

        <div className="tagCardWrapper">
          <ListTagCards setIsOpen={setIsOpen} />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EditTagCardInput onPress={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
});

export const Home = () => {
  return (
    <HomeProvider>
      <HomeComponent />
    </HomeProvider>
  );
};

// https://github.com/DeepLearnerSC
export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [currentTagCard, setCurrentTagCard] = useState({});
  const [tagCardList, setTagCardList] = useState([
    {
      title: "Song's Github",
      url: "https://github.com/DeepLearnerSC",
      tags: ["Code", "Javascript", "Profile"],
    },
    {
      title: "Song's Linked-in",
      url: "https://www.linkedin.com/in/seonghyun-song-cho-84251654/",
      tags: ["Profile", "LinkedIn", "Javascript"],
    },
    {
      title: "자바스크립트_스타일 가이드",
      url: "http://localhost:3000/",
      tags: ["Javascript", "Docs", "ECMA"],
    },
  ]);
  const [tagList, setTagList] = useState({
    Code: {
      date: null,
      tagName: "Code",
      count: 1,
    },
    Profile: {
      date: null,
      tagName: "Profile",
      count: 2,
    },
    Javascript: {
      date: null,
      tagName: "Javascript",
      count: 3,
    },
    LinkedIn: {
      date: null,
      tagName: "LinkedIn",
      count: 1,
    },
    Docs: {
      date: null,
      tagName: "Docs",
      count: 1,
    },
    ECMA: {
      date: null,
      tagName: "ECMA",
      count: 1,
    },
  });
  return (
    <HomeContext.Provider
      value={{
        tagCardList,
        setTagCardList,
        tagList,
        setTagList,
        currentTagCard,
        setCurrentTagCard,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
