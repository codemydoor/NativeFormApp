import { StatusBar } from "expo-status-bar";
import Form from "./Form";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Signup from "./Signup";
import ContactsScreen from "./ContactsScreen";
import Contact from "./Contact";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form />
      {/* <Signup /> */}
      {/* <ContactsScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
