import React, { createContext, useState, useContext, memo } from "react";
import Modal from "react-modal";
import { SearchBox } from "../../components/icons";
import { ListTagCards } from "../../components/listItems";
import { CreateTagCardInput, EditTagCardInput } from "../../components/inputs";
import "./index.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "22em", //280/
    // height:'100%',
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // margin: 0,
    padding: 0,
    // flex: 1,
    // borderWidth: 10,
    transform: "translate(-50%, -50%)",
    // backgroundColor: 'papayawhip'
    // backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
};

export const HomeComponent = memo(() => {
  const { isModalOpen, setIsModalOpen } = useContext(HomeContext);
  return (
    <div className={isModalOpen ? "Container" : "Container"}>
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

      <CreateTagCardInput />

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
          <ListTagCards />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <EditTagCardInput />
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentTagCardIdx, setCurrentTagCardIdx] = useState(0);
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
        isModalOpen,
        setIsModalOpen,
        tagCardList,
        setTagCardList,
        currentTagCardIdx,
        setCurrentTagCardIdx,
        tagList,
        setTagList,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
