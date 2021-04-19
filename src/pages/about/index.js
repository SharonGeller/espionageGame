import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import GameButton from "../../components/GameButton";
import Continer from "../../components/Continer";

export default ({ navigation }) => {
  const handleLinkPress = () => {
    Linking.openURL("https://icons8.com/");
  };
  return (
    <Continer>
      <View style={styles.menu}>
        <Text style={styles.title}>{"About"}</Text>
        <Text style={styles.text}>{"thank you for downloading our game!"}</Text>
        {/* <GameButton lable="Watch!" styles={styles.Button} /> */}
        <View style={styles.disclaimerContiner}>
          <Text style={styles.disclaimerText}>{"Icons by Icons8: "}</Text>
          <TouchableOpacity onPress={handleLinkPress}>
            <Text>{"icons8.com"}</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 27,
  },
  menu: {
    padding: "5%",
    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    height: "60%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#787878",
  },
  Button: {
    width: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFFED",
    borderRadius: 20,
    padding: 10,
    marginTop: 40,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  disclaimerText: {
    color: "#FEFFED",
    fontSize: 8,
  },
  disclaimerContiner: {
    marginTop: "40%",
    width: "100%",
  },
  Button: {
    width: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFFED",
    borderRadius: 20,
    marginTop: 40,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
