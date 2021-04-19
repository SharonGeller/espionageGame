import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import icon from "../../../assets/icon.png";
import { Container, Button, Card } from "native-base";

export default ({ navigation }) => {
  const menuOptions = [
    {
      title: "Play!",
      handleClick: () => {
        navigation.navigate("gameSelection");
      },
    },
    {
      title: "How to play",
      handleClick: () => navigation.navigate("howToPlay"),
    },
    {
      title: "About",
      handleClick: () => navigation.navigate("about"),
    },
  ];
  return (
    <View style={styles.container}>
      <Image source={icon} />
      <Text style={styles.title}>{"Spy Worlds"}</Text>
      <View style={styles.buttons}>
        {menuOptions.map((option, index) => {
          return (
            <Button
              block
              light
              key={index}
              style={styles.Button}
              onPress={option.handleClick}
            >
              <Text key={option.title}>{option.title}</Text>
            </Button>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#212121",
  },
  title: {
    color: "#FEFFED",
    marginBottom: 100,
    fontSize: 40,
  },
  buttons: {
    display: "flex",
  },
  Button: {
    padding: "2%",
    margin: "2%",
  },
});
