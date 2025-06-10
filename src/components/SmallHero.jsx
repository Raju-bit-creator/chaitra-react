import React from "react";

const SmallHero = (props) => {
  return (
    <div className="small-banner">
      <div>
        <img src="/assets/bg.jpeg" height={350} alt="small hero image" />
      </div>
      <h2 className="page-title">{props.title}</h2>
    </div>
  );
};

export default SmallHero;
