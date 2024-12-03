import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationScreen from "../screens/authentication";

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthenticationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
