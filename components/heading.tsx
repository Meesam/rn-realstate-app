import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

interface HeadingProps {
  title: string;
  subTitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subTitle }) => {
  return (
    <View className="flex-row items-center justify-between bg-white">
      <Text className="font-bold text-xl">{title}</Text>
      <Link className="font-bold text-lg text-blue-700" href={"/explore"}>
        {subTitle}
      </Link>
    </View>
  );
};

export default Heading;
