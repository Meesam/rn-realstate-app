import React from "react";
import { Image, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View className="my-6">
      <TextInput
        className="border border-gray-300 rounded-lg py-4 px-12 bg-gray-50 text-lg"
        placeholder="Search something"
      />
      <Image
        source={require("../assets/icons/search.png")}
        className="w-6 h-6 absolute top-5 left-4"
        resizeMode="contain"
      />
      <Image
        source={require("../assets/icons/filter.png")}
        className="w-6 h-6 absolute top-5 right-4"
        resizeMode="contain"
      />
    </View>
  );
};

export default Search;
