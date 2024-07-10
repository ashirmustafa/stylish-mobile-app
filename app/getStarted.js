import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Link, useRouter } from "expo-router";

const GetStarted = () => {
    const expoRouter = useRouter();
    const [fontsLoaded] = useFonts({
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    })
    if(!fontsLoaded){
        return undefined;
    }
  return (
    <View className="flex-1" >
      <ImageBackground
        source={require("../assets/getStartedBg.png")}
        className="flex-1 justify-end items-center"
      >
        <View className="py-5">
          <Text className="text-white font-semibold text-4xl text-center" style={{fontFamily:"Montserrat-SemiBold"}}>
            You want
          </Text>
          <Text className="text-white font-semibold text-4xl text-center" style={{fontFamily:"Montserrat-SemiBold"}}>
            Authentic, here
          </Text>
          <Text className="text-white font-semibold text-4xl text-center" style={{fontFamily:"Montserrat-SemiBold"}}>
            you go!
          </Text>
          <Text className="text-white text-sm text-center mt-5" style={{fontFamily:"Montserrat-Regular"}}>
            Find it here, buy it now!
          </Text>
          <TouchableOpacity
            className="bg-[#F83758] py-4 mt-14 rounded-s"
            
          >
            <Link href={'/(tabs)/home'} className="text-2xl font-semibold text-white text-center" style={{fontFamily:"Montserrat-SemiBold"}}>
              Get Started
            </Link>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;
