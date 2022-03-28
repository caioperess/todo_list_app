import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListPage from "../pages/list";
import createTodoPage from "../pages/todo";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={ListPage} />
        <Stack.Screen name="Create" component={createTodoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
