// import { StatusBar } from "react-native";
// import { useIsFocused } from "@react-navigation/core";

// const FocusedStatusBar = (props) => {
//   //calling the useIsFocused hook
//   const isFocused = useIsFocused();

//   return isFocused ? <StatusBar animated={true} {...props} /> : null;
// };

// export default FocusedStatusBar;

import { StatusBar, View, Text } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
  console.log(props);
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
