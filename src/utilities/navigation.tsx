import { createStackNavigator } from "@react-navigation/stack";
import { LoginPage } from "../pages/login/login";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="login" component={LoginPage} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
