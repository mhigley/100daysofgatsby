import React from "react";

const Dump = props => {
  return (
    <div
      style={{
        fontsize: 20,
        border: "1px solid #efefef",
        padding: 20,
        background: "#fafafa",
        boxShadow: "0 0 8px 1px hsla(0, 0%, 0%, .45) inset"
      }}
    >
      {Object.entries(props).map(([key, val]) => {
        return (
          <pre key={key}>
            <strong style={{ color: "white", background: "red" }}>
              {key} 💩
            </strong>
            {JSON.stringify(val, "", " ")}
          </pre>
        );
      })}
    </div>
  );
};

export default Dump;
