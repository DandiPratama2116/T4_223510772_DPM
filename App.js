import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import ScoreBoard from "./src/components/ScoreBoard";
import WinnerModal from "./src/components/WinnerModal";

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleScoreChange = (team, increment) => {
    if (team === "A") {
      const newScore = Math.max(0, scoreA + increment);
      setScoreA(newScore);
      if (newScore === 10) setWinner("Team A");
    } else if (team === "B") {
      const newScore = Math.max(0, scoreB + increment);
      setScoreB(newScore);
      if (newScore === 10) setWinner("Team B");
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <ScoreBoard
        teamA={{
          name: "Madrid",
          score: scoreA,
          logo: {
            uri: "https://i.pinimg.com/736x/c1/ff/f5/c1fff59aec602495dad48727e42b7f1c.jpg",
          },
        }}
        teamB={{
          name: "Barca",
          score: scoreB,
          logo: {
            uri: "https://i.pinimg.com/736x/97/0d/05/970d05657c176c9b711ea3c349454d3a.jpg",
          },
        }}
        onScoreChange={handleScoreChange}
      />
      <Button title="Reset Scores" onPress={resetScores} />
      {winner && (
        <WinnerModal winner={winner} onClose={() => setWinner(null)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default App;
