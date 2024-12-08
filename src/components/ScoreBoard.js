import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ScoreButton from "./ScoreButton";

const ScoreBoard = ({ teamA, teamB, onScoreChange }) => {
  return (
    <View style={styles.container}>
      *teamA*
      <View style={styles.teamContainer}>
        <View style={styles.logoContainer}>
          <Image source={teamA.logo} style={styles.logo} />
        </View>
        <Text style={styles.teamName}>{teamA.name}</Text>
        <Text style={styles.score}>{teamA.score}</Text>
        <View style={styles.buttonContainer}>
          <ScoreButton title="+" onPress={() => onScoreChange("A", 1)} />
          <ScoreButton title="-" onPress={() => onScoreChange("A", -1)} />
        </View>
      </View>
      *teamB*
      <View style={styles.teamContainer}>
        <View style={styles.logoContainer}>
          <Image source={teamB.logo} style={styles.logo} />
        </View>
        <Text style={styles.teamName}>{teamB.name}</Text>
        <Text style={styles.score}>{teamB.score}</Text>
        <View style={styles.buttonContainer}>
          <ScoreButton title="+" onPress={() => onScoreChange("B", 1)} />
          <ScoreButton title="-" onPress={() => onScoreChange("B", -1)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  score: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default ScoreBoard;
