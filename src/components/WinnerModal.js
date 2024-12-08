import React from "react";
import { Modal, View, Text, StyleSheet, Button } from "react-native";

const WinnerModal = ({ winner, onClose, onReset }) => {
  return (
    <Modal transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.text}>{winner} Wins!</Text>
          <Button title="Close" onPress={onClose} />
          <Button title="Reset Game" onPress={onReset} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default WinnerModal;
