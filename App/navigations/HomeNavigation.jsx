import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import BusinessListByCategory from "../Screens/BusinessListByCategory/BusinessListByCategory";
import Colors from "../Utils/Colors";
import BusinessDetail from "../Screens/BusinessDetail/BusinessDetail";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-list" component={BusinessListByCategory} />
      <Stack.Screen name="business-detail" component={BusinessDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
