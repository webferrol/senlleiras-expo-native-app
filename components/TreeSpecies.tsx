import { Image, StyleSheet, Text, View } from "react-native";
import { Tree } from "../types";

export function TreeSpecies({ specimen }: { specimen: Tree }) {
  const { genero, especie, google_url, descripcion } = specimen;
  return (
    <View style={styles.container}>
      <Image src={google_url} style={styles.image} />
      <Text style={styles.title}>
        {genero} {especie}
      </Text>
      <Text>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 5 },
  image: { width: 150, height: 150, borderRadius: 10 },
  title: { fontWeight: "bold", fontSize: 16 },
});
