import React from "react";
import Constants from "expo-constants";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const StatusBar = () => {
  return (
    <View>
      <LinearGradient
        colors={["blue", "purple"]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: Constants.statusBarHeight,
        }}
      />
    </View>
  );
};

const styles = {
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "purple",
  },
};

export default StatusBar;
