import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Menu from "../../pages/menu";
import GameSelection from "../../pages/game/game-selection";
import GameSettings from "../../pages/game/game-settings";
import Game from "../../pages/game/game";
import Timer from "../../pages/game/timer";
import HowToPlay from "../../pages/how-to-play";
import About from "../../pages/about";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen" initialRouteName="menu">
        <Stack.Screen
          name="menu"
          component={Menu}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="gameSelection"
          component={GameSelection}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="gameSettings"
          component={GameSettings}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="game"
          component={Game}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="timer"
          component={Timer}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="howToPlay"
          component={HowToPlay}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
