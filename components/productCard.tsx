import { Product } from "@/types/appType";

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ProductCard: React.FC<Product> = ({
  id,
  title,
  image,
  address,
  price,
  rating,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={image} className="size-full rounded-2xl" />
      <Image
        source={require("../assets/images/card-gradient.png")}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className="flex flex-row items-center bg-white rounded-full px-3 py-1.5 absolute top-5 right-5">
        <Image
          source={require("../assets/icons/star.png")}
          className="size-3.5"
        />
        <Text className="font-bold text-blue-600 ml-1">3.5</Text>
      </View>
      <View></View>
    </TouchableOpacity>
  );
};

export default ProductCard;
