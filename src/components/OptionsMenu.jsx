import React from "react";

const options = [
  {
    name: "Wood",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/legs.svg"
  },
  {
    name: "MainBox",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/cushions.svg"
  },
  {
    name: "InnerBox",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/base.svg"
  },
  {
    name: "CustomizedSticker",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/supports.svg"
  },
  {
    name: "ChocolateHolder",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/back.svg"
  }
];

export const OptionsMenu = ({ activeOption, setActiveOption }) => {
  return (
    <div className="options">
      {options.map(({ name, img }, idx) => (
        <div
          className={`option ${activeOption === name ? "--is-active" : ""}`}
          data-option={name}
          onClick={() => setActiveOption(name)}
          key={name}
        >
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
};
