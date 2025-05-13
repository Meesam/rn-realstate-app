import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="/login">Login</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
};

export default Index;
