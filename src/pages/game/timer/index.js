import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import CountDown from "../../../components/Countdown";
import Continer from "../../../components/Continer";

export default ({ navigation, route }) => {
  const [isDone, setIsDone] = useState(false);
  const { game, time } = route.params;
  return (
    <Continer>
      <Image source={game.image} />
      <Text style={styles.title}>{game.title}</Text>
      {!isDone ? (
        <CountDown time={time} handleFinish={() => setIsDone(true)} />
      ) : (
        <Text style={styles.title}>{"Time is up!"}</Text>
      )}
    </Continer>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FEFFED",
    fontSize: 30,
    marginBottom: 5,
  },
  menu: {
    paddingTop: "5%",
    display: "flex",
    alignItems: "center",
    height: "40%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#787878",
  },
});
