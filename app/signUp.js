import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const SignUp = () => {
    return (
        <SafeAreaView>
            <View className="px-10">
                <View className="mt-10">
                    <Text className="text-4xl font-bold">Create an</Text>
                    <Text className="text-4xl font-bold">account</Text>
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
                    <View className="border-[1px] border-[#A8A8A9] bg-[#F3F3F3] flex-row items-center py-4 px-5 rounded-xl relative">
                        <Image
                            source={require("../assets/lock.png")}
                            className="mr-2 ml-1"
                        />
                        <TextInput placeholder="Confirm Password" />
                        <Image
                            source={require("../assets/eye.png")}
                            className="absolute right-5"
                        />
                    </View>
                </View>
                <View className="w-[258px] mt-3">
                    <Text className="text-xs text-gray-400">
                        By clicking the <Text className="text-[#F83758]">Register</Text> button, you agree to the public offer
                    </Text>
                </View>

                <TouchableOpacity className="bg-[#F83758] py-4 mt-10 rounded-s">
                    <Text className="text-xl font-semibold text-white text-center">
                        Create Account
                    </Text>
                </TouchableOpacity>

                <View className="mt-10">
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



                    <View className="flex-row gap-2 justify-center items-center mt-4">
                        <Text className="text-center text-base text-[#575757]">
                            I Already Have An Acount
                        </Text>
                        <Text className="text-center text-base font-semibold underline text-[#F83758]">
                            Login
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default SignUp;
