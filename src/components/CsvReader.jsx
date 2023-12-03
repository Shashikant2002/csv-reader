import React, { useState } from "react";
import { IoFingerPrintSharp } from "react-icons/io5";

const CsvReader = () => {
  const [active, setActive] = useState({ tabBtn: 0, content: 0 });
  const [selected, setIsSelected] = useState("Choose one");
  const [isActive, setIsActive] = useState(false);

  const [csvFile, setCsvFile] = useState(null);
  const [csvJson, setCsvJson] = useState(null);

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

  const onchangeHandelser = async (e) => {
    setCsvFile(e.target.files[0]);

    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;

      let splitPoint = ",";
      const headers = text.slice(0, text.indexOf("\n")).split(splitPoint);
      const rows = text.slice(text.indexOf("\n") + 1).split("\n");

      let newArray = rows.map((row) => {
        const values = row.split(splitPoint);
        const eachObject = headers.reduce((obj, header, i) => {
          if (values[i]) {
            obj[header] = values[i];
            return obj;
          }
        }, {});
        return eachObject;
      });

      newArray.splice(newArray.length - 1, 1);

      setCsvJson(newArray);
    };

    reader.readAsText(e.target.files[0]);
  };

  const onSubmitHandaler = async () => {
    try {
      if (!csvFile || !selected || !csvJson) {
        alert("Select File !!");
      }
      console.log(selected);
      console.log(csvJson);
    } catch (error) {
      console.log(error);
    }
  };

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

      <div className="content">
        <IoFingerPrintSharp />

        <div className="chooseFile">
          <button>
            <label htmlFor="inputFile">Choole File</label>
          </button>
          <p>
            {csvFile ? csvFile?.name : ""}
            {csvFile ? " | Size: " : ""}
            {csvFile ? `${csvFile?.size / 1000}MB` : ""}
          </p>
          <input
            onChange={(e) => onchangeHandelser(e)}
            accept=".csv"
            type="file"
            id="inputFile"
          />
        </div>
        <button className="submit" onClick={onSubmitHandaler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CsvReader;
