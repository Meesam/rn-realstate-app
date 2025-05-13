import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
  const navigation = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white px-4 py-3 ">
      <Image
        source={require("../assets/images/splash.png")}
        className="w-full h-1/2"
        resizeMode="contain"
      />
      <View className="w-full ">
        <TextInput
          placeholder="Username"
          className="border border-gray-300 mb-4 rounded-lg p-3"
        />
        <TextInput
          placeholder="Password"
          className="border border-gray-300 mb-4 rounded-lg p-3"
          secureTextEntry
        />
        <Link href="/forgetPassword" className="text-center mb-4">
          Forget Password?
        </Link>
        <Link href="/(root)/(tabs)/" className="bg-blue-500 rounded-lg p-3">
          <Text className="text-white text-center text-xl">Login</Text>
        </Link>

        <View className="flex-row items-center justify-center gap-2 mt-4">
          <Text>Don&apos;t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.push("/register")}>
            <Text className="text-blue-500 font-medium">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
