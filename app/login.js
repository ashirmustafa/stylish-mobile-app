import { useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const expoRouter = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView>
      <View className="px-10">
        <View className="mt-10">
          <Text className="text-4xl font-bold">Welcome</Text>
          <Text className="text-4xl font-bold">Back!</Text>
        </View>

        <View className="gap-9 mt-2">
          <View className="border-[1px] border-[#A8A8A9] bg-[#F3F3F3] flex-row items-center py-4 px-5 rounded-xl">
            <Image source={require("../assets/user.png")} className="mr-1" />
            <TextInput placeholder="Username or Email" />
          </View>
          <View className="border-[1px] border-[#A8A8A9] bg-[#F3F3F3] flex-row items-center py-4 px-5 rounded-xl relative">
            <Image
              source={require("../assets/lock.png")}
              className="mr-2 ml-1"
            />
            <TextInput placeholder="Password" />
            <Image
              source={require("../assets/eye.png")}
              className="absolute right-5"
            />
          </View>
        </View>
        <View className="flex-row justify-end items-center">
          <TouchableOpacity>
            <Text className="text-red-500 mt-3">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-[#F83758] py-4 mt-14 rounded-s" onPress={() => expoRouter.navigate('/getStarted')}>
          <Text className="text-xl font-semibold text-white text-center">
            Login
          </Text>
        </TouchableOpacity>

        <View className="mt-14">
          <Text className="text-center text-xs text-[#575757]">
            - OR Continue with -
          </Text>
          <View className="flex-row items-center gap-3 justify-center mt-2">
            <TouchableOpacity className="border-[1px] border-[#F83758] bg-[#FCF3F6] rounded-full items-center justify-center p-5">
              <Image source={require("../assets/google.png")} />
            </TouchableOpacity>
            <TouchableOpacity className="border-[1px] border-[#F83758] bg-[#FCF3F6] rounded-full items-center justify-center p-5">
              <Image source={require("../assets/google.png")} />
            </TouchableOpacity>
            <TouchableOpacity className="border-[1px] border-[#F83758] bg-[#FCF3F6] rounded-full items-center justify-center p-5">
              <Image source={require("../assets/google.png")} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="flex-row gap-2 justify-center mt-4" onPress={() => expoRouter.navigate('signUp')}>
            <Text className="text-center text-base text-[#575757]">
              Create An Account
            </Text>
            <Text className="text-center text-base font-semibold underline text-[#F83758]">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Login;
