import { StyleSheet, View } from "react-native";
import React from "react";
import { usePremiumStore } from "./stores/premiumStore";
import { Button, Switch, Text } from "react-native-paper";
import { mainStyles } from "../styles/theme";
import StyledText from "../components/common/styledText";

const Settings = () => {
  const { isDarkMode, changeTheme } = usePremiumStore((state) => ({
    isDarkMode: state.isDarkMode,
    changeTheme: state.changeTheme,
  }));
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{ alignSelf: "center" }}>
          <StyledText>Switch to dark mode</StyledText>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={() => changeTheme(isDarkMode)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...mainStyles.marginH,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});

export default Settings;
