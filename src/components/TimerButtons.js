import { View, StyleSheet, Text } from "react-native";
import { RoundedButton } from "./RoundedButton";

const TimerButton = ({ onChangeTime }) => {
  return (
    <View style={styles.addTime}>
      <RoundedButton
        size={100}
        title="10"
        style={styles.addTimeButton}
        onPress={() => {
          onChangeTime(10);
        }}
      />
      <RoundedButton
        size={100}
        title="15"
        style={styles.addTimeButton}
        onPress={() => {
          onChangeTime(15);
        }}
      />
      <RoundedButton
        size={100}
        title="20"
        style={styles.addTimeButton}
        onPress={() => {
          onChangeTime(20);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addTime: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.1,
    paddingTop: 30,
  },
  addTimeButton: {
    margin: 20,
    height: 75,
    width: 75,
  },
});

export default TimerButton;
