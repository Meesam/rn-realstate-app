import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const navigation = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Login</Text>
      <TouchableOpacity
        className="px-4 py-3 bg-blue-500 rounded-full"
        onPress={() => navigation.navigate("/home")}
      >
        <Text className="text-white">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-4 py-3 bg-blue-500 rounded-full"
        onPress={() => navigation.navigate("/register")}
      >
        <Text className="text-white">Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
