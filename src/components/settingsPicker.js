import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default ({ value, style, handleValueChange, options, ...props }) => {
  return (
    <Picker
      selectedValue={value}
      style={style}
      onValueChange={handleValueChange}
      {...props}
    >
      {options.map((option, index) => {
        return (
          <Picker.Item key={index} label={option.toString()} value={option} />
        );
      })}
    </Picker>
  );
};
