import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { FixedMenu } from "./components/FixedMenu";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={true}
        style="auto"
        backgroundColor="rgba(53,125,161, .4)"
        animated={true}
      />
      <View style={styles.container}>
        <FixedMenu />
        <Main />
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
