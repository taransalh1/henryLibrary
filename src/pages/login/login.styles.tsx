import { StyleSheet, useColorScheme } from "react-native";
import { Dimensions } from "react-native";
const isDesktopOrLaptop = Dimensions.get("window").width >= 1224;
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: isDesktopOrLaptop ? "300" : "95%",
    minHeight: 450,
    maxHeight: 450,
  },
  boxStyles: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    padding: isDesktopOrLaptop ? 50 : 20,
    paddingVertical: 40,
    gap: 10,
    elevation: 10,
    shadowColor: "#656565",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  inputStyle: {
    width: "100%",
    justifyContent: "center",
    height: 60,
    lineHeight: 22,
  },
  buttonStyle: {
    marginTop: 25,
    borderRadius: 25,
  },
  signupContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    lineHeight: 28,
    gap: 5,
  },
});
