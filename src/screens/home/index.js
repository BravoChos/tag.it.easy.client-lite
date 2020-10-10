import React from "react";
import { Search } from "../../components/icons";
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
            placeholder="Search Tag or type a url"
            // onChange={this.props.desChange}
          />
          <div className="searchBar">
            <Search size={"2em"} />
          </div>
        </div>
      </header>
      <p>Hello Welcome to Tag it easy!!</p>
    </div>
  );
};
