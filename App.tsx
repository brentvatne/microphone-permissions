import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Request BarCodeScanner permissions"
        onPress={async () => {
          try {
            let result = await BarCodeScanner.requestPermissionsAsync();
            alert(JSON.stringify(result));
          } catch (e) {
            alert(`Exception: ${e.message}`);
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
