import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/icons/home.png")}
              className="h-8 w-8"
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/icons/search.png")}
              className="h-8 w-8"
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bookmark" size={24} color="gray" />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/icons/person.png")}
              className="h-8 w-8"
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
