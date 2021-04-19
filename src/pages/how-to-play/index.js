import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Continer from "../../components/Continer";

export default ({ navigation }) => {
  return (
    <Continer>
      <View style={styles.menu}>
        <Text style={styles.title}>{"Rules"}</Text>
        <Text style={styles.text}>
          {
            "The spy's objective: avoid exposure until the end of the game or to guess right the current location."
          }
        </Text>
        <Text style={styles.text}>
          {"The non-spies' objective: guess the spy's identity"}
        </Text>
      </View>
    </Continer>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FEFFED",
    fontSize: 30,
  },
  text: {
    marginTop: 35,
    color: "#FEFFED",
    fontSize: 25,
  },
  menu: {
    padding: "5%",
    paddingTop: "5%",
    display: "flex",
    alignItems: "center",
    height: "60%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#787878",
  },
});
