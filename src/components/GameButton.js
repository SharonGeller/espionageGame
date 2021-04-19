import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default ({ handleClick, styles, lable, ...props }) => {
  return (
    <TouchableOpacity {...props} onPress={handleClick} style={styles}>
      <Text>{lable}</Text>
    </TouchableOpacity>
  );
};
