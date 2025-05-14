import { Product } from "@/types/appType";
import React from "react";
import { Text, View } from "react-native";

const ProductCard: React.FC<Product> = ({
  id,
  title,
  image,
  address,
  price,
  rating,
}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default ProductCard;
