import { SafeAreaView, Text, View } from "react-native";
import { styles as pageStyles } from "./login.styles";
import { MD3Theme, useTheme } from "react-native-paper";
export const LoginPage = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        pageStyles.mainContainer,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      <SafeAreaView style={[pageStyles.container]}>
        <View
          style={[
            pageStyles.boxStyles,
            { backgroundColor: theme.colors.secondaryContainer },
          ]}
        >
          <Text
            style={[
              theme.fonts.displayMedium,
              { color: theme.colors.onSecondaryContainer },
            ]}
          >
            Miller Family Library
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
