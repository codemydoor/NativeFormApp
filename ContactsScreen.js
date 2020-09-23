import React from "react";
import Contact from "./Contact";
import { Text, View, FlatList, StyleSheet } from "react-native";

function ContactsScreen() {
  const contacts = [
    { name: "Edmund Quashie", number: "0243153742" },
    { name: "Dennis Quashie", number: "0243153742" },
    { name: "Esther Flore", number: "0243153742" },
    { name: "Kumi Guitar ", number: "0243153742" },
    { name: "Shatta Walle", number: "0243153742" },
    { name: "James  Wilson", number: "0243153742" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return <Contact name={item.name} phone={item.number} />;
        }}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
}
export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
});
