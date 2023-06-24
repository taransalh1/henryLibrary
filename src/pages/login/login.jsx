import {
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { styles as pageStyles } from "./login.styles";
import { Button, TextInput, useTheme, Text } from "react-native-paper";
import { appColors } from "../../utilities/colorSchemes/appColors";
import { useState } from "react";
export const LoginPage = ({ navigation }) => {
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [btnLoading, setbtnLoading] = useState(false);
  return (
    <View
      style={[
        pageStyles.mainContainer,
        { backgroundColor: theme.colors.primary },
      ]}
    >
      <SafeAreaView style={[pageStyles.container]}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={[
            pageStyles.boxStyles,
            { backgroundColor: theme.colors.secondaryContainer },
          ]}
        >
          <Text
            style={[
              theme.fonts.displaySmall,
              { color: theme.colors.onSecondaryContainer },
            ]}
          >
            Miller Family Library
          </Text>
          <TextInput
            label="Email"
            mode="outlined"
            theme={{ colors: { onSurfaceVariant: appColors.placeHolderColor } }}
            onChangeText={(text) => {}}
            textColor={appColors.textColor}
            outlineColor={appColors.textOutlineColor}
            style={[pageStyles.inputStyle, { marginTop: 25 }]}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={secureTextEntry}
            textColor={appColors.textColor}
            theme={{ colors: { onSurfaceVariant: appColors.placeHolderColor } }}
            onChangeText={(text) => {}}
            right={
              <TextInput.Icon
                icon="eye"
                style={{ marginTop: 10, height: 60 }}
                color={appColors.placeHolderColor}
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                  return false;
                }}
              />
            }
            outlineColor={appColors.textOutlineColor}
            style={[pageStyles.inputStyle]}
          />

          <Button
            icon="arrow-right-circle"
            mode="elevated"
            onPress={() => {
              setbtnLoading(true);
              navigation.navigate("dashboard", { name: "Jane" });
            }}
            elevation={2}
            loading={btnLoading}
            style={pageStyles.buttonStyle}
            labelStyle={{
              fontSize: 25,
              color: theme.colors.primary,
            }}
            contentStyle={[
              {
                flexDirection: "row-reverse",
                paddingHorizontal: 20,
                paddingVertical: 5,
              },
            ]}
            theme={{
              colors: { primary: "white", background: appColors.primaryGreen },
            }}
          >
            <Text style={[theme.fonts.titleMedium, { color: "#FFFFFF" }]}>
              Login
            </Text>
          </Button>

          <Text style={pageStyles.signupContainer}>
            Don't have an account?{" "}
            <Text style={[{ color: theme.colors.primary }]}>Sign Up</Text>
          </Text>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
