import React, { useRef } from "react";
import propTypes from "prop-types";

function InputFile(props) {
  const {
    value,
    placeholder,
    accept,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);
  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={value}
          onChange={props.onChange}
        />
        <input
          onClick={() => refInputFile.current.click}
          defaultValue={value}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input-group-append">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

InputFile.defaultProps = {
  placeholder: "please type here...",
};

InputFile.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};

export default InputFile;
