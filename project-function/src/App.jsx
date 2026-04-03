import React from "react";

const pageScrolling = (ele) => {
  if (ele > 0) {
    console.log("scrolling down");
  } else {
    console.log("scrolling up");
  }
};
const App = () => {
  return (
    <div
      onWheel={(elem) => {
        pageScrolling(elem.deltaY);
      }}
      className="container"
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      <div className="page4"></div>
    </div>
  );
};

export default App;
