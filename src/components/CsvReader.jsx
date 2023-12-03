import React, { useState } from "react";
import { IoFingerPrintSharp } from "react-icons/io5";

const CsvReader = () => {
  const [active, setActive] = useState({ tabBtn: 0, content: 0 });
  const [selected, setIsSelected] = useState("Choose one");
  const [isActive, setIsActive] = useState(false);

  const button = [
    {
      title: "File",
    },
    {
      title: "Url",
    },
    {
      title: "Search",
    },
  ];

  return (
    <div className="csv_reader">
      <div className="tab_btns">
        {button.map((ele, i) => {
          return (
            <button
              key={ele.title}
              className={`${active.tabBtn == i ? "active" : ""}`}
              onClick={() => {
                setActive({ tabBtn: i, content: i });
              }}
            >
              {ele.title}
            </button>
          );
        })}
      </div>

      <div className="content">
        <IoFingerPrintSharp />

        <div className="dropdown">
          <div
            onClick={(e) => {
              setIsActive(!isActive);
            }}
            className="dropdown-btn"
          >
            {selected}
            <span
              className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
            />
          </div>
          <div
            className="dropdown-content"
            style={{ display: isActive ? "block" : "none" }}
          >
            <div
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
              className="item"
            >
              One
            </div>
            <div
              className="item"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            >
              Two
            </div>
            <div
              className="item"
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
            >
              Three
            </div>
          </div>
        </div>

        <button>
          <label htmlFor="inputFile">Choole File</label>
        </button>
        <input type="file" id="inputFile" />
      </div>
    </div>
  );
};

export default CsvReader;
