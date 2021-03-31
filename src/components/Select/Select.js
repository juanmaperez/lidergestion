import React from "react";
import { withTheme } from "styled-components";

import Select from "react-select";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const getCustomStyles = (
  theme,
  accentColor = `#22b0fc`,
  bg = `#fff`,
  border,
  indicator
) => {
  return {
    dropdownIndicator: () => {
      return {
        display: !indicator ? "block" : "none",
      };
    },
    indicatorSeparator: () => {},
    option: (provided, state) => {
      return {
        ...provided,
        color: state.isSelected ? accentColor : `#121212`,
        textAlign: "left",
        backgroundColor: bg,
      };
    },
    control: (provided, state) => {
      return {
        ...provided,
        border: !border
          ? "none"
          : state.menuIsOpen || state.isFocused
          ? `1px solid ${accentColor} !important`
          : `1px solid #ddd !important`,
        borderRadius: 10,
        padding: "0.25rem 1rem",
        width: "100%",
        height: "45px",
        outline: "none",
        boxShadow: "none",
        textAlign: "left",
        backgroundColor: bg,
      };
    },
  };
};

const SelectStyled = ({
  theme,
  name,
  value,
  onChange,
  onBlur,
  options = defaultOptions,
  ...rest
}) => {
  const handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    onChange(name, value);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    onBlur(name, true);
  };

  return (
    <Select
    	{...rest}
      value={value}
      styles={getCustomStyles(theme)}
      defaultValue={options[1]}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      options={options}
    />
  );
};

export default withTheme(SelectStyled);
