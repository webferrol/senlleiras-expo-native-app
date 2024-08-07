import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import img from "./assets/carballo-conxo.jpg";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView>
          {/* <ImageBackground source={img} resizeMode="cover"> */}
          <StatusBar style="auto" backgroundColor="#61dafb" animated={true} />
          <Main />
          {/* </ImageBackground> */}
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F1",
  },
});
