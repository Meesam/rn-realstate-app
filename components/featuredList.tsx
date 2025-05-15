import { Product } from "@/types/appType";
import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./productCard";

const data: Product[] = [
  {
    id: "1",
    title: "Merialla Villa",
    image: require("../assets/images/new-york.png"),
    address: "New York, US",
    price: "12299",
    rating: "4.5",
  },
  {
    id: "2",
    title: "Modernica Apartment",
    image: require("../assets/images/japan.png"),
    address: "New York, US",
    price: "12299",
    rating: "4.5",
  },
  {
    id: "3",
    title: "Modernica Apartment",
    image: require("../assets/images/japan.png"),
    address: "New York, US",
    price: "12299",
    rating: "4.5",
  },
  {
    id: "4",
    title: "Merialla Villa",
    image: require("../assets/images/new-york.png"),
    address: "New York, US",
    price: "12299",
    rating: "4.5",
  },
  {
    id: "5",
    title: "Modernica Apartment",
    image: require("../assets/images/japan.png"),
    address: "New York, US",
    price: "12299",
    rating: "4.5",
  },
];

const FeaturedList = () => {
  return (
    <View className="my-6">
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-4"
      />
      {/*<ProductCard {...data[0]} />*/}
    </View>
  );
};

export default FeaturedList;
