import React from "react";
import { SearchBox } from "../../components/icons";
import "./index.css";
export const Home = () => {
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
            <div className='tag'>IamSuperCool</div>
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
    </div>
  );
};
