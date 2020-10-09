import React, { Component } from "react";

export const Home = () => {
  return (
    <div className="Container">
      <header className="header">
        <div className="logo-home">
          <img src={require("../../assets/img/logo.png")} alt="ss" />
        </div>
        <div>
          <div
            onClick={(e) => {
              this.logout(e);
            }}
          >
            <button className="logout-button">LogOut</button>
          </div>
        </div>
      </header>
      <p>Hello Welcome to Tag it easy!!</p>
    </div>
  );
};
