import {
  ActivityIndicator,
  // Dimensions,
  FlatList,
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

// const { height } = Dimensions.get("window");

export function Main() {
  const { data, error, loading } = useTree();

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
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
              data={data}
              keyExtractor={(item) => item.idDoc}
              renderItem={({ item }) => <TreeSpecies specimen={item} />}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
