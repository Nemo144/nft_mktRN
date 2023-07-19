import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen />
        <Stack.Screen />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
