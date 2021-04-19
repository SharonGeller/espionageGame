import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Animated,
} from "react-native";
import Continer from "../../../components/Continer";
import GameButton from "../../../components/GameButton";
import { getRoles, getLocation } from "../../../utils/role-assigner";

export default ({ navigation, route }) => {
  const [location, setLocation] = useState("");
  const [game] = useState(route.params.game);
  const [time] = useState(route.params.options.time);
  const [roles, setRoles] = useState([]);
  const [showingRole, setShowingRole] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [show, setShow] = useState(true);
  const fadeValue = useRef(new Animated.Value(0));

  useEffect(() => {
    const { game: gameSettinges, options, time } = route.params;
    const locationObj = getLocation(gameSettinges.locations);
    const roles = getRoles(locationObj.characters, options);

    setLocation(locationObj.name);
    setRoles(roles);
  }, []);

  const handleShowButtonlClick = () => {
    const activeRoles = [...roles];
    setShowingRole(activeRoles.shift());
    setRoles(activeRoles);
    Animated.timing(fadeValue.current, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setShow(false);
  };
  const handleHideButtonlClick = () => {
    Animated.timing(fadeValue.current, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    if (roles[0] === "end") setIsDone(true);
    setShow(true);
  };

  return (
    <Continer>
      <Image source={game.image} />
      <Text style={styles.title}>{game.title}</Text>

      {!isDone ? (
        <View style={styles.menu}>
          <View style={styles.animationView}>
            {showingRole !== "spy" && (
              <Animated.Text
                style={[styles.location, { opacity: fadeValue.current }]}
              >
                {location}
              </Animated.Text>
            )}
            <Animated.Text
              style={[styles.role, { opacity: fadeValue.current }]}
            >
              {showingRole}
            </Animated.Text>
          </View>
          {show ? (
            <GameButton
              lable={"Show!"}
              handleClick={handleShowButtonlClick}
              styles={styles.Button}
            />
          ) : (
            <GameButton
              lable={"hide"}
              handleClick={handleHideButtonlClick}
              styles={styles.Button}
            />
          )}
        </View>
      ) : (
        <GameButton
          lable={"Start the game"}
          handleClick={() => navigation.navigate("timer", { game, time })}
          styles={styles.Button}
        />
      )}
    </Continer>
  );
};

const styles = StyleSheet.create({
  menu: {
    paddingTop: "5%",
    display: "flex",
    alignItems: "center",
    height: "40%",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#787878",
  },
  animationView: {
    paddingTop: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "100%",
    borderRadius: 20,
  },
  location: {
    color: "#FEFFED",
    fontSize: 30,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginBottom: "5%",
  },
  role: {
    color: "#FEFFED",
    fontSize: 30,
  },
  title: {
    color: "#FEFFED",
    fontSize: 40,
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
