import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Main } from "./Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import img from "./assets/carballo-conxo.jpg";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* <ImageBackground source={img} resizeMode="cover"> */}
        <StatusBar style="auto" />
        <Main />
        {/* </ImageBackground> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
