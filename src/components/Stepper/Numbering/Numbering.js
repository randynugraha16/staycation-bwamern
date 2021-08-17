import React from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";

export default function Numbering({ className, data, current }) {
  const KeysOfData = Object.keys(data);
  return (
    <Fade>
      <ol className={["stepper", className].join(" ")}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
