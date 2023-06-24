import { createStackNavigator } from "@react-navigation/stack";
import { DashboardPage } from "../pages/dashboard/dashboard";
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
      <HomeStack.Screen name="dashboard" component={DashboardPage} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
