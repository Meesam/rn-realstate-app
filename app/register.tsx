import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Regiter = () => {
  const navigation = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Regiter</Text>

      <Link href="/(tabs)" className="px-4 py-3 bg-blue-500 rounded-full">
        <Text className="text-white">Home</Text>
      </Link>
      <Link href="/login" className="px-4 py-3 bg-blue-500 rounded-full">
        <Text className="text-white">Login</Text>
      </Link>
    </View>
  );
};

export default Regiter;
