import FeaturedList from "@/components/featuredList";
import Header from "@/components/header";
import Heading from "@/components/heading";
import Search from "@/components/search";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white p-4">
        <Header />
        <Search />
        <ScrollView className="flex-1">
          <Heading title="Featured" subTitle="See All" />
          <FeaturedList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Index;
