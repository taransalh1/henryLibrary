import { ColorSchemeName } from "react-native";

export const getColorSchemeNormalized = (colorScheme: ColorSchemeName) => {
  if (colorScheme == null || colorScheme == undefined) {
    return "light";
  } else {
    return colorScheme;
  }
};
