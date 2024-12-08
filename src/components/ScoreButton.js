import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ScoreButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default ScoreButton;
