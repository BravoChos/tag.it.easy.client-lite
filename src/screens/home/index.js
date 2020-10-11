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
        <div className="tagGenerator__tagInput">
          <p>Hello Welcome to Tag it easy!!</p>
        </div>
        <div id="user">
          <p>Hello Welcome to Tag it easy!!</p>
        </div>
      </div>
    </div>
  );
};
