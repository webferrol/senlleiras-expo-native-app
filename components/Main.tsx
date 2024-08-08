import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useTree } from "../hooks/useTree";
import { TreeSpecies } from "./TreeSpecies";

const { height } = Dimensions.get("window");
const img = require("../assets/carballo-conxo.jpg");
const ico = require("../assets/senllapp-ico.png");

export function Main() {
  const { data, error, loading } = useTree();

  const insets = useSafeAreaInsets();

  return (
    <ScrollView>
      <SafeAreaView>
        <ImageBackground
          style={{ marginTop: -insets.top }}
          source={img}
          resizeMode="cover"
        >
          <View
            style={{
              height: height,
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 200,
                objectFit: "contain",
                backgroundColor: "#fff",
              }}
              source={ico}
            />
            <Text
              style={{
                color: "white",
                fontSize: 40,
                textAlign: "center",
              }}
            >
              Carballo banquete de Conxo
            </Text>
          </View>
        </ImageBackground>
        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ ...styles.title, paddingTop: insets.top }}>
            Senlleiras
          </Text>
          {loading ? (
            <ActivityIndicator color="#f00" size="large" />
          ) : error ? (
            <Text style={{ color: "#f00" }}>Ufff: {error}</Text>
          ) : (
            <View>
              <FlatList
                scrollEnabled={false}
                data={data}
                keyExtractor={(item) => item.idDoc}
                renderItem={({ item }) => <TreeSpecies specimen={item} />}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
