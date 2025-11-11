import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/view/Login";
import Home from "./src/view/Home";
import NewsDetails from "./src/view/NewsDetails";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  NewsDetails: { article: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // oculta header no login
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
