import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from './screens/Landing';
import FindDonorsScreen from './screens/FindDonors';
import PostBloodRequestScreen from './screens/PostBloodRequest';
import AuthHomeScreen from './screens/auth/AuthHome';
import LoginScreen from './screens/auth/Login';
import RegisterScreen from "./screens/auth/Register";
import ResetPassword from "./screens/auth/ResetPassword";
import Verify from "./screens/auth/Verify";
import Success from "./screens/auth/Success";
import Dashboard from "./pages/Dashboard";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="FindDonors"
          component={FindDonorsScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="PostBloodRequest"
          component={PostBloodRequestScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="AuthHome"
          component={AuthHomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
