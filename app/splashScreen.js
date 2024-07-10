import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
  Button,
  Animated,
  Text,
  Image,
} from "react-native";

const data = [
  {
    headerText: "Choose Products",
    paraText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imgSrc: require("../assets/slide1.png"),
  },
  {
    headerText: "Make Payment",
    paraText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imgSrc: require("../assets/slide2.png"),
  },
  {
    headerText: "Get your Order",
    paraText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    imgSrc: require("../assets/slide3.png"),
  },
];
const { height, width } = Dimensions.get("window");

const SplashScreen = () => {
  const expoRouter = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  return (
    <View className="flex-1 justify-between">
      <View className="flex-row justify-between px-5 mt-5">
        <Text className="text-lg font-semibold">
          {currentIndex + 1}/
          <Text className="text-[#A0A0A1]">{data.length}</Text>
        </Text>
        <TouchableOpacity>
          <Text
            className="text-lg font-semibold"
            onPress={() => expoRouter.navigate("/login")}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Animated.FlatList
          ref={ref}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={(e) => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex(Math.round(x / width));
          }}
          renderItem={({item}) => {
            return (
              <Animated.View
                style={{ width: width }}
                className="justify-center items-center"
              >
                <TouchableOpacity className="w-[90%] items-center bg-white">
                  <Image source={item.imgSrc} />
                  <View className="w-[340px]">
                    <Text className="text-2xl font-extrabold mb-3 text-center">
                      {item.headerText}
                    </Text>
                    <Text className="text-sm font-semibold text-gray-400 leading-5 text-center tracking-widest">
                      {item.paraText}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View
        className="flex-row justify-between px-5 items-center mb-5"
        style={{ width: width }}
      >
        {currentIndex !== 0 ? (
          <TouchableOpacity
            onPress={() => {
              if (currentIndex === 0 || currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                ref.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) - 1,
                });
              }
            }}
          >
            <Text className="text-[#C4C4C4] text-lg font-semibold">Prev</Text>
          </TouchableOpacity>
        ) : (
          <View className="bg-transparent"></View>
        )}

        <View className="flex-row justify-center items-center">
          {data.map((item, index) => {
            return (
              <View
                className={`${
                  currentIndex === index ? "w-[40]" : "w-[8]"
                } h-[8] rounded-full ${
                  currentIndex === index ? "bg-[#17223B]" : "bg-[#17223B33]"
                } ml-4`}
                key={index}
              ></View>
            );
          })}
        </View>
        {currentIndex === data.length - 1 ? (
          <TouchableOpacity
            onPress={() => {
              if (currentIndex < data.length - 1) {
                setCurrentIndex(currentIndex + 1);
                ref.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) + 1,
                });
              }
            }}
          >
            <Text className="text-[#F83758] text-lg font-semibold" onPress={() => expoRouter.navigate("/login")}>
              Get Started
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (currentIndex < data.length - 1) {
                setCurrentIndex(currentIndex + 1);
                ref.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) + 1,
                });
              }
            }}
          >
            <Text className="text-[#F83758] text-lg font-semibold">Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SplashScreen;
