import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  memo,
} from "react";
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
  const { isModalOpen, setIsModalOpen, tagList } = useContext(HomeContext);
  // console.log(tagList);
  let test = Object.keys(tagList);
  console.log(test);

  let newArray = test
    .map((item) => {
      return tagList[item];
    })
    .sort((a, b) => {
      return b.date - a.date;
    });
  console.log(newArray);
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

          {newArray.map((item, idx) => {
            return (
              <div className="subtag">
                <input
                  type="checkbox"
                  name="checkbox"
                  value="tag"
                  // onClick={this.props.handleRadioChange}
                />

                <label>
                  {item.tagName} ({item.count})
                </label>
              </div>
            );
          })}
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
      date: 1604504385099,
    },
    {
      title: "Song's Linked-in",
      url: "https://www.linkedin.com/in/seonghyun-song-cho-84251654/",
      tags: ["Profile", "LinkedIn", "Javascript"],
      date: 1604504385098,
    },
    {
      title: "자바스크립트_스타일 가이드",
      url: "http://localhost:3000/",
      tags: ["Javascript", "Docs", "ECMA"],
      date: 1604504385097,
    },
  ]);
  const [tagList, setTagList] = useState({
    Code: {
      date: 1604504385099,
      tagName: "Code",
      count: 1,
    },
    Profile: {
      date: 1604504385099,
      tagName: "Profile",
      count: 2,
    },
    Javascript: {
      date: 1604504385099,
      tagName: "Javascript",
      count: 3,
    },
    LinkedIn: {
      date: 1604504385098,
      tagName: "LinkedIn",
      count: 1,
    },
    Docs: {
      date: 1604504385097,
      tagName: "Docs",
      count: 1,
    },
    ECMA: {
      date: 1604504385097,
      tagName: "ECMA",
      count: 1,
    },
  });

  const _updateTagList = () => {
    // console.log(tagCardList, "tagCardList");
    // let copy = cloneDeep(tagCardList);
    let newTagList = {};
    tagCardList.forEach((tagCard) => {
      // console.log(tagCard, "tagCard");
      tagCard.tags.forEach((tag) => {
        console.log("tagCard", tagCard.date);
        if (newTagList[tag]) {
          newTagList[tag].date =
            newTagList[tag].date > tagCard.date
              ? newTagList[tag].date
              : tagCard.date;
          newTagList[tag].count++;
          // console.log("1", newTagList[tag]);
        } else {
          newTagList[tag] = {
            date: tagCard.date ? tagCard.date : new Date().getTime(),
            tagName: tag,
            count: 1,
          };
          // console.log("2", newTagList[tag]);
        }
      });

      // let copyTagList = cloneDeep(tagList);
      // input.tags.forEach((item, index) => {
      //   if (copyTagList[item]) {
      //     copyTagList[item].date = new Date().getTime();
      //     copyTagList[item].count++;
      //   } else {
      //     copyTagList[item] = {
      //       date: new Date().getTime(),
      //       tagName: item,
      //       count: 1,
      //     };
      //   }
      // });

      // setTagList(copyTagList);
    });
    console.log(newTagList, "!!!!!");
    setTagList(newTagList);
  };

  useEffect(() => {
    _updateTagList();
    console.log("useEffect", tagCardList);
  }, [tagCardList]);
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
        _updateTagList,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
