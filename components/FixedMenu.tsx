import { StyleSheet, Text, View } from "react-native";

export function FixedMenu() {
  return (
    <View style={styles.fixedMenu}>
      <Text style={styles.menuText}>Inicio</Text>
      <Text style={styles.menuText}>Perfil</Text>
      <Text style={styles.menuText}>Configuración</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fixedMenu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#007AFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1000,
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
  },
});
