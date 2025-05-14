import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View className="flex-row items-center justify-between bg-white">
      <View className="flex-row items-center gap-4">
        <Image
          source={require("../assets/images/avatar.png")}
          className="w-14 h-14 rounded-full"
          resizeMode="contain"
        />
        <View>
          <Text className="text-gray-500 text-sm">Good Morning</Text>
          <Text className="text-gray-800 font-semibold text-lg">
            Meesam Zaidi
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/icons/bell.png")}
          className="w-8 h-8"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
