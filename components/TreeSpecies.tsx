import { Image, StyleSheet, Text, View } from "react-native";
import { Tree } from "../types";

export function TreeSpecies({ specimen }: { specimen: Tree }) {
  const { genero, especie, google_url, descripcion } = specimen;
  return (
    <View style={styles.container}>
      <Image
        src={google_url}
        className="w-36 h-36 object-cover rounded-lg shadow-2xl shadow-black"
      />
      <Text className="font-bold text-lg">
        {genero} {especie}
      </Text>
      <Text className="text-sm">{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 5 },
  title: { fontWeight: "bold", fontSize: 16 },
});
