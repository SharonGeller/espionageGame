import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Application from "./src/application";

export default function App() {
  return (
    <View style={styles.container}>
      <Application />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
