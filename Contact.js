import React, { Component } from "react";
import profile from "./assets/profile.jpg";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Contact({ name, phone }) {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profile} />
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text>{phone}</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icons}>
          <MaterialIcons name="phone" size={24} color="blue" />
        </View>
        <View style={styles.icons}>
          <MaterialCommunityIcons
            name="message-processing"
            size={24}
            color="blue"
          />
        </View>
        <View style={styles.icons}>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="blue" />
        </View>
      </View>
    </View>
  );
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginHorizontal: 10,
    flex: 3,
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  icons: {
    marginHorizontal: 3,
  },
  name: {
    fontWeight: "bold",
    paddingBottom: 6,
  },
});
