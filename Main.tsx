import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useTree } from "./hooks/useTree";
import { TreeSpecies } from "./components/TreeSpecies";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
        <Text
          style={{
            fontSize: 30,
            paddingTop: insets.top,
          }}
        >
          Senlleiras
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "blue",
          }}
        ></View>
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
