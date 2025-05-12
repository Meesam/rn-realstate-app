import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const navigation = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("/login")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("/register")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
