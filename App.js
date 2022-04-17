import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "./assets/colors";
import { Focus } from "./src/components/focus";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
