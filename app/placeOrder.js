import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const emojisWithIcons = [
  { title: "42", icon: "emoticon-happy-outline" },
  { title: "41", icon: "emoticon-cool-outline" },
  { title: "40", icon: "emoticon-lol-outline" },
];
export default function PlaceOrder() {
    const expoRouter = useRouter();
  return (
    <View className='h-full bg-white '>
      <View className="px-5 my-5">
        <View className="flex-row justify-between mt-10 items-center">
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="black"
            onPress={() => expoRouter.back()}
          />
          <Text className="text-lg font-semibold">Checkout</Text>
          <View>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
        </View>
      </View>

      <View className="flex-row px-5 mt-5 ">
        <Image source={require("../assets/placeOrder.png")} />
        <View className="ml-4 py-3">
          <Text className="font-semibold mb-3">Women's casual Wear</Text>
          <Text className="text-sm mb-3">Checked Single-Breasted Blazer</Text>
          <View className="flex-row mb-3">
            <SelectDropdown
              data={emojisWithIcons}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      <Text className="font-normal text-sm">Size </Text>
                      <Text className="text-sm">
                        {(selectedItem && selectedItem.title) || "42"}
                      </Text>
                    </Text>
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      style={styles.dropdownButtonArrowStyle}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
            <SelectDropdown
              data={emojisWithIcons}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              renderButton={(selectedItem, isOpened) => {
                return (
                  <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      <Text className="font-normal text-sm">Size </Text>
                      <Text className="text-sm">
                        {(selectedItem && selectedItem.title) || "42"}
                      </Text>
                    </Text>
                    <Icon
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      style={styles.dropdownButtonArrowStyle}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && { backgroundColor: "#D2D9DF" }),
                    }}
                  >
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>
          <Text className="">
            Delivery by <Text className="font-bold">10 May 2XXX</Text>
          </Text>
        </View>
      </View>

      <View className="px-5 mt-14">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-3">
            <Ionicons name="ticket-outline" size={24} color="black" />
            <Text className="font-medium">Apply Coupons</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-red-500 font-medium">Select</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-[#C4C4C4] h-[1px] w-full mt-7" />
      </View>

      <View className="px-5 mt-10">
        <Text className="font-medium text-[17px]">Order Payment Details</Text>
        <View className="flex-row justify-between mt-5">
          <Text>Order Amounts</Text>
          <Text className="font-bold">7,000.00</Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <View className="flex-row items-center gap-3">
            <Text>Convenience</Text>
            <Text className="text-red-500">Know More</Text>
          </View>
          <Text className="text-red-500 font-bold">Apply Coupon</Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <Text>Delivery Fee</Text>
          <Text className="font-bold text-red-500">Free</Text>
        </View>
        <View className="bg-[#C4C4C4] h-[1px] w-full mt-7" />
      </View>

      <View className="px-5 mt-10">
        <View className="flex-row items-center justify-between">
          <Text className="font-medium text-[17px]">Order Total</Text>
          <Text className="font-bold">7,000.00</Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <View className="flex-row items-center gap-3">
            <Text>EMI Available</Text>
            <Text className="text-red-500">Know More</Text>
          </View>
        </View>

        <View className="bg-[#C4C4C4] h-[1px] w-full mt-7" />
      </View>

      <View className="border-t-2 border-[#F8F8F8] bg-[#F8F8F8] p-5 pb-12 absolute bottom-0 left-0 w-full rounded-3xl">
        <View className="flex-row items-center  justify-between ">
          <View>
            <Text>7,000.00</Text>
            <Text className='text-red-500'>View Details</Text>
          </View>
          <TouchableOpacity
            className="bg-[#F83758] py-4 rounded-md px-8"
            onPress={() => expoRouter.navigate("/getStarted")}
          >
            <Text className="text-xl font-semibold text-white text-center">
            Proceed to Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 90,
    backgroundColor: "#E9ECEF",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 10,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
    marginTop: -10,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
