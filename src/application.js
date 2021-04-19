import React from "react";
import MainNavigator from "./shell/navigators/main-navigator";
import MyStatusBar from "./shell/status-bar";
import { StyleSheet, Text, View } from "react-native";

const Application = () => {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default Application;
