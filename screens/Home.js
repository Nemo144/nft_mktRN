// import { useState } from "react";
// import { Text, FlatList, View, SafeAreaView } from "react-native";
// import { COLORS, NFTData } from "../constants";
// import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

// const Home = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <FocusedStatusBar background={COLORS.primary} />
//     </SafeAreaView>
//   );
// };

// export default Home;
import { useState } from "react";
import { Text, Flatlist, View, SafeAreaView } from "react-native";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  );
};

export default Home;
