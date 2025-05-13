import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className=" bg-white h-full">
      <View className="h-full">
        <Image
          source={require("../assets/images/onboarding.png")}
          className="object-cover w-full h-full"
        />

        <Link
          href="/login"
          className="px-4 py-3 bg-blue-500 rounded-full absolute bottom-10 left-10 right-10"
        >
          <Text className="text-white text-center text-lg">Get Started</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
