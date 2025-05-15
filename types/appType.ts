import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  title: string;
  image: ImageSourcePropType | undefined;
  address: string;
  price: string;
  rating: string;
  onPress?:()=>void
}