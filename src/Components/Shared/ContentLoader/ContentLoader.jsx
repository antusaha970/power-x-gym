import React from "react";
import "./ContentLoader.css";

const ContentLoader = () => {
  return (
    <div className="loadingspinner">
      <div id="square1"></div>
      <div id="square2"></div>
      <div id="square3"></div>
      <div id="square4"></div>
      <div id="square5"></div>
    </div>
  );
};

export default ContentLoader;
