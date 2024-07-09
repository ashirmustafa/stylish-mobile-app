import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";

const data = [1, 2, 3];
const { height, width } = Dimensions.get("window");

const SplashScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SafeAreaView>
      <View className="justify-center items-center h-screen">
        <View style={{ height: height / 2 }}>
          <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onScroll={(e) => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex(Math.round(x / width));
            }}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{ width: width, height: height / 2 }}
                  className="justify-center items-center"
                >
                  <TouchableOpacity className="w-[90%] h-[90%] bg-green-600"></TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View
          className="flex-row justify-center items-center"
          style={{ width: width }}
        >
          {data.map((item, index) => {
            return (
              <View
                className={`${currentIndex === index ? 'w-[32]' : 'w-[8]' } h-[8] rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-500'} ml-4`}
                key={index}
              ></View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
