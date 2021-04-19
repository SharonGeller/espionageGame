import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Continer from "../../../components/Continer";

import SettingesPicker from "../../../components/settingsPicker";

export default ({ navigation, route }) => {
  const { game } = route.params;
  const [players, setPlayers] = useState(3);
  const [spies, setSpies] = useState(1);
  const [time, setTime] = useState(4);
  const numbOfPlayersOptions = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const timerOptions = [0.1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 11, 12, 13];

  getNumberOfSpyOptions = (players) => {
    let options = [];
    for (let i = 1; i <= players - 2; i++) {
      options.push(i);
    }
    return options;
  };

  return (
    <Continer>
      <View style={styles.menu}>
        <Text style={styles.title}>{"Game Settings!"}</Text>
        <Text style={styles.text}>{"Number of players:"}</Text>
        <SettingesPicker
          value={players}
          style={styles.picker}
          handleValueChange={(selection) => setPlayers(selection)}
          options={numbOfPlayersOptions}
        />
        <Text style={styles.text}>{"Number of spies:"}</Text>
        <SettingesPicker
          value={spies}
          style={styles.picker}
          handleValueChange={(selection) => setSpies(selection)}
          options={getNumberOfSpyOptions(players)}
        />
        <Text style={styles.text}>{"Game duration in minutes:"}</Text>
        <SettingesPicker
          value={time}
          style={styles.picker}
          handleValueChange={(selection) => setTime(selection)}
          options={timerOptions}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("game", {
              game,
              options: { players, spies, time },
            })
          }
          style={styles.Button}
        >
          <Text>{"Start!"}</Text>
        </TouchableOpacity>
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
    fontSize: 15,
  },
  menu: {
    paddingTop: "5%",
    display: "flex",
    alignItems: "center",
    height: "60%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#787878",
  },
  picker: {
    marginTop: 2,
    marginLeft: 8,
    width: "30%",
    borderRadius: 20,
    color: "#FEFFED",
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
});
