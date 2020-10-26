import React from "react";
import { SearchBox } from "../../components/icons";
import { ListTagCards } from "../../components/listItems";
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
          <ListTagCards />
        </div>
      </div>
    </div>
  );
};
// https://github.com/DeepLearnerSC
