import React, { Component } from "react";

export const FilterTag = () => {
  // this.props.handleCheckboxChange
  // this.props.selectedItem

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="tag"
          //   value={this.props.tagN}
          //   onClick={this.props.handleCheckboxChange}
        />
        {this.props.tagN}
        tagHere
      </label>
    </div>
  );
};
