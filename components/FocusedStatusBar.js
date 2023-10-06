// import { StatusBar } from "react-native";
// import { useIsFocused } from "@react-navigation/core";

// const FocusedStatusBar = (props) => {
//   //calling the useIsFocused hook
//   const isFocused = useIsFocused();

//   return isFocused ? <StatusBar animated={true} {...props} /> : null;
// };

// export default FocusedStatusBar;

import { View, Text } from "react-native";
import React from "react";

const FocusedStatusBar = () => {
  return (
    <View>
      <Text>FocusedStatusBar</Text>
    </View>
  );
};
