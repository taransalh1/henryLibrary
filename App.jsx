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
  configureFonts,
} from "react-native-paper";
import merge from "deepmerge";
import lightThemeColors from "./src/utilities/colorSchemes/themeLight.json";
import darkThemeColors from "./src/utilities/colorSchemes/themeDark.json";
import fonts from "./src/utilities/fonts.json";
import { Platform, TextInput, useColorScheme, Text } from "react-native";
import TextWithDefaultProps from "./src/utilities/ITextProps";
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_200ExtraLight,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_100Thin,
} from "@expo-google-fonts/jost";
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);
export default function App() {
  const colorScheme = useColorScheme();
  Text.defaultProps = Text.defaultProps || {};
  TextInput.defaultProps = TextInput.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps.allowFontScaling = false;
  let [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_200ExtraLight,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_100Thin,
  });

  if (!fontsLoaded) {
    return null;
  }
  let theme;
  if (Platform.OS === "web") {
    theme = {
      ...CombinedDefaultTheme,
      colors: lightThemeColors.colors,
      fonts: fonts,
    };
  } else {
    theme =
      colorScheme === "dark"
        ? {
            ...CombinedDarkTheme,
            colors: darkThemeColors.colors,
            fonts: fonts,
          }
        : {
            ...CombinedDefaultTheme,
            colors: lightThemeColors.colors,
            fonts: fonts,
          };
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <HomeStackNavigator></HomeStackNavigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
