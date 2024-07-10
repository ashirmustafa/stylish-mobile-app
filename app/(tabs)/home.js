import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View, Animated, Dimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const categoriesData = [
    {
        label: 'Beauty',
        imgSrc: require('../../assets/beauty.png')
    },
    {
        label: 'Fashion',
        imgSrc: require('../../assets/beauty.png')
    },
    {
        label: 'Kids',
        imgSrc: require('../../assets/beauty.png')
    },
    {
        label: 'Mens',
        imgSrc: require('../../assets/beauty.png')
    },
    {
        label: 'Womens',
        imgSrc: require('../../assets/beauty.png')
    },
    {
        label: 'Animals',
        imgSrc: require('../../assets/beauty.png')
    },
    {
        label: 'Fish',
        imgSrc: require('../../assets/beauty.png')
    },
]
const saleData = [1, 2, 3];
const { height, width } = Dimensions.get("window");
const Home = () => {
    const expoRouter = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef();
    return (
        <SafeAreaView className="bg-[#efefef] h-[100%]">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="px-5">
                    <View className="flex-row justify-between items-center mt-8">
                        <Image source={require('../../assets/burgerMenu.png')} />
                        <Image source={require('../../assets/logo.png')} />
                        <Image source={require('../../assets/avatar.png')} />
                    </View>

                    <View className="bg-white mt-5 flex-row items-center py-2 px-5 rounded-xl relative">
                        <Image
                            source={require("../../assets/search.png")}
                            className="mr-2 ml-1 w-[14.58px]"
                        />
                        <TextInput placeholder="Search any Product" />
                        <Image
                            source={require("../../assets/mic.png")}
                            className="absolute right-5"
                        />
                    </View>

                    <View className="flex-row justify-between mt-5">
                        <Text className="text-lg font-semibold">All Featured</Text>
                        <View className="flex-row">
                            <TouchableOpacity className="bg-white rounded-md flex-row items-center px-2 py-1 mr-3">
                                <Text className="mr-1">Sort</Text>
                                <Image source={require('../../assets/arrows.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white rounded-md flex-row items-center px-2 py-1">
                                <Text className="mr-1">Filter</Text>
                                <Image source={require('../../assets/arrows.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View className="mt-4 pl-5">
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categoriesData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity className="mr-5">
                                    <Image source={require('../../assets/beauty.png')} />
                                    <Text className="text-center">{item.label}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        className="bg-white p-2 rounded-l-lg"
                    />
                </View>

                <View className="mt-5 ">
                    <Animated.FlatList
                        ref={ref}
                        data={saleData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onScroll={(e) => {
                            const x = e.nativeEvent.contentOffset.x;
                            setCurrentIndex(Math.round(x / width));
                        }}
                        renderItem={({ item }) => {
                            return (
                                <Animated.View
                                    style={{ width: width }}
                                    className="justify-center items-center"
                                >
                                    <TouchableOpacity className="w-[90%] h-[200px] rounded-2xl overflow-hidden">
                                        <ImageBackground
                                            source={require("../../assets/saleBg.png")}
                                            className="flex-1 justify-center items-start"
                                        >
                                            <View className="ml-5">
                                                <Text className="text-white font-bold text-xl text-center" style={{ fontFamily: "Montserrat-SemiBold" }}>
                                                    50-40% OFF
                                                </Text>
                                                <Text className="text-white text-xs mt-2" style={{ fontFamily: "Montserrat-Regular" }}>
                                                    Now in (product)
                                                </Text>
                                                <Text className="text-white text-xs" style={{ fontFamily: "Montserrat-Regular" }}>
                                                    All colours
                                                </Text>

                                                <TouchableOpacity
                                                    className="bg-transparent border-[1px] border-white rounded-lg py-2 mt-2 w-[100px] rounded-s"
                                                    onPress={() => expoRouter.navigate("/home")}
                                                >
                                                    <Text className="text-xs font-semibold text-white text-center" style={{ fontFamily: "Montserrat-SemiBold" }}>
                                                        Shop  Now {`>`}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </Animated.View>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <View className="items-center justify-center mt-4">
                    <View
                        className="flex-row justify-between items-center mb-5"
                    >
                        <View className="flex-row justify-center items-center">
                            {saleData.map((item, index) => {
                                return (
                                    <View
                                        className={`${currentIndex === index ? "w-[10]" : "w-[8]"
                                            } h-[8] rounded-full ${currentIndex === index ? "bg-[#FFA3B3]" : "bg-[#17223B33]"
                                            } ml-1`}
                                        key={index}
                                    ></View>
                                );
                            })}
                        </View>
                    </View>
                </View>

                <View className='px-5 mt-2'>
                    <View className="bg-[#4392F9] rounded-lg px-3 py-2 flex-row justify-between items-center">
                        <View>
                            <Text className="text-base text-white">Deal of the Day</Text>
                            <Text className="text-base text-white">{'<'} 22h 55m 20s remaining </Text>
                        </View>
                        <TouchableOpacity
                            className="bg-transparent border-[1px] border-white rounded-lg py-2 w-[100px] rounded-s"
                            onPress={() => expoRouter.navigate("/home")}
                        >
                            <Text className="text-xs font-semibold text-white text-center" style={{ fontFamily: "Montserrat-SemiBold" }}>
                                View All {`>`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="px-5 mt-4">
                    <View className="flex-row bg-white rounded-lg p-3">
                        <Image source={require('../../assets/specialOffers.png')} />
                        <View className="max-w-[171px] ml-4">
                            <Text className="text-base font-medium">Special Offers 😱</Text>
                            <Text className="text-xs mt-1">We make sure you get the offer you need at best prices</Text>
                        </View>
                    </View>
                </View>
                <View className='px-5 mt-2'>
                    <View className="bg-[#FD6E87] rounded-lg px-3 py-2 flex-row justify-between items-center">
                        <View>
                            <Text className="text-base text-white">Trending Products</Text>
                            <Text className="text-base text-white">{'<'} Last Date 29/02/22</Text>
                        </View>
                        <TouchableOpacity
                            className="bg-transparent border-[1px] border-white rounded-lg py-2 w-[100px] rounded-s"
                            onPress={() => expoRouter.navigate("/home")}
                        >
                            <Text className="text-xs font-semibold text-white text-center" style={{ fontFamily: "Montserrat-SemiBold" }}>
                                View All {`>`}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View className="px-5 my-4">
                    <View className="rounded-lg overflow-hidden">
                        <Image source={require('../../assets/summerSale.png')} className="w-full" />
                        <View className="bg-white flex-row justify-between px-2 py-3">
                            <View className="">
                                <Text className="text-xl font-medium">New Arrivals</Text>
                                <Text>Summer' 25 Collections</Text>
                            </View>
                            <View className="self-end">
                                <TouchableOpacity
                                    className="bg-[#F83758] rounded-lg py-2 w-[100px] rounded-s"
                                    onPress={() => expoRouter.navigate("/home")}
                                >
                                    <Text className="text-xs font-semibold text-white text-center" style={{ fontFamily: "Montserrat-SemiBold" }}>
                                        View All {`>`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="pl-5 my-4">
                    <View className="bg-white pl-3">
                        <Text className="text-xl font-medium mb-2">Sponserd</Text>
                        <View className="rounded-l-lg overflow-hidden">
                            <Image source={require('../../assets/sponserd.png')} className="w-full object-cover" />
                            <View className="bg-white flex-row justify-between items-center py-2">
                                <Text className="text-base font-bold">Up to 50% Off</Text>
                                <TouchableOpacity
                                    onPress={() => expoRouter.navigate("/home")}
                                >
                                    <Text className="text-base font-semibold text-black text-center mr-4" style={{ fontFamily: "Montserrat-SemiBold" }}>
                                        {`>`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Home;
