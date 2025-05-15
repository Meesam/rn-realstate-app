import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const filterList = ["All", "House", "Villa", "Apartments", "Hut"];

const RecommendationFilterChip = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("All");

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="my-5"
    >
      {filterList.map((item, idx) => {
        const isActive = selectedFilter === item;
        return (
          <TouchableOpacity
            key={idx}
            className={`ml-2 py-3 px-6 rounded-full ${
              isActive ? "bg-blue-600" : "bg-blue-100"
            }`}
            onPress={() => setSelectedFilter(item)}
          >
            <Text className={isActive ? "text-white" : "text-blue-700"}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default RecommendationFilterChip;
