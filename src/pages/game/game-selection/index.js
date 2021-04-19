import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Continer from "../../../components/Continer";
import games from "../../../games";

export default ({ navigation }) => {
  const menuOptions = [
    {
      title: "starwars!",
      onclick: () => navigation.navigate("gameSelection"),
    },
  ];
  return (
    <Continer>
      <View style={styles.menu}>
        <FlatList
          style={styles.flatList}
          data={games}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: game }) => {
            return (
              <TouchableOpacity
                block
                light
                key={game.title + "touch"}
                onPress={() => navigation.navigate("gameSettings", { game })}
                style={styles.Button}
              >
                <Image key={game.image} source={game.image} />
                <Text key={game.title + "text"}>{game.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Continer>
  );
};

const styles = StyleSheet.create({
  menu: {
    marginTop: 200,
    overflow: "scroll",
    height: "80%",
  },
  flatList: {
    height: "100%",
  },
  games: {
    height: "80%",
  },
  Button: {
    width: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFFED",
    borderRadius: 20,
    padding: 15,
    marginRight: 5,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
