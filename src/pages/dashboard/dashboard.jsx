import { SafeAreaView, View } from "react-native";
import { styles as pageStyles } from "./dashboard.styles";
import { useTheme } from "react-native-paper";
import { FAB } from "react-native-paper";
import { Dimensions } from "react-native";
const isDesktopOrLaptop = Dimensions.get("window").width >= 1224;
export const DashboardPage = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={[
        pageStyles.mainContainer,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      <FAB
        icon="security"
        color="#585858"
        size={isDesktopOrLaptop ? "medium" : "small"}
        style={pageStyles.fab}
        onPress={() => console.log("Pressed")}
      />
      <FAB
        icon="qrcode-scan"
        color="#585858"
        size={isDesktopOrLaptop ? "medium" : "small"}
        style={pageStyles.fab2}
        onPress={() => console.log("Pressed")}
      />
      <View></View>
    </SafeAreaView>
  );
};
