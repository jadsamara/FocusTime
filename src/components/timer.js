import { View, Text, StyleSheet, Vibration } from "react-native";
import { Countdown } from "./Countdown";
import { ProgressBar } from "react-native-paper";
import { RoundedButton } from "./RoundedButton";
import { useState } from "react";
import { fontSizes, spacing } from "../../assets/sizes";
import { colors } from "../../assets/colors";
import TimerButton from "./TimerButtons";
import { useKeepAwake } from "expo-keep-awake";
import { Focus } from "./focus";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.05);
  useKeepAwake();

  const onEnd = ({ reset }) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    setMinutes(reset);
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ padding: spacing.xxl }}>
          <Text style={styles.text}>
            Focusing on: <Text style={styles.task}>{focusSubject}</Text>
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar style={styles.progress} progress={progress} />
      </View>
      <TimerButton onChangeTime={setMinutes} />
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.white,
    fontWeight: "300",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  progress: {
    backgroundColor: colors.white,
    height: spacing.sm,
    width: "90%",
    alignSelf: "center",
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: "column",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
