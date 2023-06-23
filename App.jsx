import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import "react-native-gesture-handler";
import HomeStackNavigator from "./src/utilities/navigation";
import {
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import merge from "deepmerge";
import * as lightThemeColors from "./src/utilities/colorSchemes/themeLight.json";
import * as darkThemeColors from "./src/utilities/colorSchemes/themeDark.json";
import { getColorSchemeNormalized } from "./src/utilities/normalizeColorScheme";
import { useColorScheme } from "react-native";
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);
export default function App() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark"
      ? { ...CombinedDarkTheme, colors: darkThemeColors.colors }
      : { ...CombinedDefaultTheme, colors: lightThemeColors.colors };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <HomeStackNavigator></HomeStackNavigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
