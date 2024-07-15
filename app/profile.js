import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";




export default function Profile() {
  return (
    <ScrollView>
      <View className="mt-5  px-5 h-full">
        <View className="flex-row justify-between mt-10">
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="black"
            onPress={() => expoRouter.back()}
          />
          <Text className="text-lg font-semibold">Profile</Text>
          <View className="invisible" />
        </View>

        <View className="mx-auto mt-7">
          <TouchableOpacity className="relative">
            <Image source={require("../assets/pfp.png")} />
            <View className="bg-[#4392F9] absolute -right-3 bottom-0 rounded-full p-2 border-[3px] border-white">
              <FontAwesome5 name="pencil-alt" size={14} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View className="my-5">
          <Text className="text-lg font-semibold">Personal Details</Text>
          <View className="mt-4">
            <Text className="">Email Address</Text>
            <TextInput
              className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
              value="test@gmail.com"
            />
          </View>
          <View className="mt-8">
            <Text className="">Password</Text>
            <TextInput
              className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
              value="***********"
            />
          </View>
          <View className="flex-row justify-end">
            <Text className="text-red-500 underline mt-3">Change Password</Text>
          </View>
        </View>

        <View className="bg-[#C4C4C4] h-[1px] w-full my-4" />

        <Text className="text-lg font-semibold">Business Address Details</Text>
        <View className="mt-5">
          <Text className="">Pincode</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="421331"
          />
        </View>
        <View className="mt-5">
          <Text className="">Address</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="216 St Paul's Rd, "
          />
        </View>
        <View className="mt-5">
          <Text className="">City</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="London"
          />
        </View>
        <View className="mt-5">
          <Text className="">State</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="421331"
          />
        </View>
        <View className="mt-5">
          <Text className="">Country</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="United Kingdom"
          />
        </View>

        <View className="bg-[#C4C4C4] h-[1px] w-full my-4" />

        <Text className="text-lg font-semibold">Bank Account Details</Text>
        <View className="mt-5">
          <Text className="">Bank Account Number</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="204356XXXXXXX"
          />
        </View>
        <View className="mt-5">
          <Text className="">Account Holder’s Name</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="Abhiraj Sisodiya"
          />
        </View>
        <View className="mt-5">
          <Text className="">IFSC Code</Text>
          <TextInput
            className="border-[1px] border-[#C8C8C8] rounded-lg bg-white py-3 px-5 font-bold mt-3"
            value="SBIN00428"
          />
        </View>
        <TouchableOpacity
          className="bg-[#F83758] py-4 mt-10 mb-10 rounded-lg"
          onPress={() => expoRouter.navigate("/getStarted")}
        >
          <Text className="text-xl font-semibold text-white text-center">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
