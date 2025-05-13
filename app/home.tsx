import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4">
        <Image
          source={require("../assets/images/onboarding.png")}
          className="object-fitr w-full h-full"
        />

        <Link
          href="/login"
          className="px-4 py-3 bg-blue-500 rounded-full absolute bottom-10 left-10 right-10"
        >
          <Text className="text-white text-center text-lg">Login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
