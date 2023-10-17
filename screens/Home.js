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
import { Text, FlatList, View, SafeAreaView } from "react-native";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
