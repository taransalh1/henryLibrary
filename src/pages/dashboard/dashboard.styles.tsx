import { StyleSheet, useColorScheme } from "react-native";
import { Dimensions } from "react-native";
const isDesktopOrLaptop = Dimensions.get("window").width >= 1224;
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    width: isDesktopOrLaptop ? "300" : "95%",
    minHeight: 450,
    maxHeight: 450,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    top: isDesktopOrLaptop ? 10 : 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
  fab2: {
    position: "absolute",
    margin: 16,
    right: isDesktopOrLaptop ? 70 : 55,
    top: isDesktopOrLaptop ? 10 : 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
});
