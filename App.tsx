import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import HookProviders from "./src/hooks";
import AppStyles from "./src/styles/style";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        style="light"
        translucent
        backgroundColor={AppStyles.COLORS.primary}
      />

      <HookProviders>
        <Routes />
      </HookProviders>
    </>
  );
}
