import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function Checkout() {
  return (
    <>
      <View className="px-5 mt-5">
        <View className="flex-row justify-between mt-10 items-center">
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="black"
            onPress={() => expoRouter.back()}
          />
          <Text className="text-lg font-semibold">Checkout</Text>
          <View className="invisible" />
        </View>
      </View>
      <View className="bg-[#C4C4C4] h-[1px] w-full my-4" />

      <View className="px-5">
        <View className="flex-row  gap-1">
          <EvilIcons name="location" size={24} color="black" />
          <Text className="font-bold">Delivery Address</Text>
        </View>

        <View className="flex-row justify-between items-center ">
          <View className="w-[241px] bg-white p-3 rounded-xl mt-4">
            <View className="flex-row justify-between mb-2">
              <Text>Address:</Text>
              <FontAwesome name="pencil-square-o" size={24} color="black" />
            </View>
            <Text>
              216 St Paul's Rd, London N1 2LL, UK Contact : +44-784232
            </Text>
          </View>
          <View className="bg-white self-stretch items-center justify-center p-6 rounded-xl mt-4">
            <Ionicons name="add-circle-outline" size={34} color="black" />
          </View>
        </View>

        <View className="mt-5">
          <Text className="font-bold">Shopping List</Text>
        </View>
        <ScrollView>
          <View className="p-2 flex-row bg-white rounded-lg">
            <Image source={require("../assets/shoppingList.png")} />
            <View>
              <Text className="font-bold">Women's casual Wear</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
