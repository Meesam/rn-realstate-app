import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Regiter = () => {
  const navigation = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Regiter</Text>
      <TouchableOpacity
        className="px-4 py-3 bg-blue-500 rounded-full"
        onPress={() => navigation.navigate("/login")}
      >
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-4 py-3 bg-blue-500 rounded-full"
        onPress={() => navigation.navigate("/home")}
      >
        <Text className="text-white">Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Regiter;
