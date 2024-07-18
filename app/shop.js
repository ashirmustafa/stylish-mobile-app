import { View, Text, ImageBackground, Animated, Dimensions, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating-widget';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const arrowCarouselData = [
    {
        imgSrc: require('../assets/shop.png')
    },
    {
        imgSrc: require('../assets/shop.png')
    },
    {
        imgSrc: require('../assets/shop.png')
    },
    {
        imgSrc: require('../assets/shop.png')
    },

]
const sizeData = [
    {
        id: 0,
        label: '6 UK'
    },
    {
        id: 1,
        label: '7 UK'
    },
    {
        id: 2,
        label: '8 UK'
    },
    {
        id: 3,
        label: '9 UK'
    },
    {
        id: 4,
        label: '10 UK'
    },
]
const { height, width } = Dimensions.get("window");

const screenWidth = Dimensions.get('window').width;

export default function Shop() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef();
    const [selected, setSelected] = useState(null);
    const handleSelect = (index) => {
        setSelected(index);
    }
    const [selectedSize, setSelectedSize] = useState(null);
    const expoRouter = useRouter();
    return (
        <SafeAreaView>
            <View className="bg-[#F9F9F9]">
                <View className="flex-row justify-between px-5 mt-10">
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={() => expoRouter.back()} />
                    <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
                </View>
                <ScrollView>
                    <View className="">
                        <View className="mt-5 relative ">
                            <Animated.FlatList
                                ref={ref}
                                data={arrowCarouselData}
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
                                                    source={require("../assets/shop.png")}
                                                    className="flex-1 justify-center items-start"
                                                >

                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </Animated.View>
                                    );
                                }}
                                keyExtractor={(item, index) => index.toString()}
                            />
                            <View className="absolute right-8 top-[35%]">
                                <View
                                    className="flex-row justify-between items-center mb-5"
                                >

                                    <TouchableOpacity
                                        className="bg-[#BBBBBB] p-3 rounded-full"
                                        onPress={() => {
                                            if (currentIndex < arrowCarouselData.length - 1) {
                                                setCurrentIndex(currentIndex + 1);
                                                ref.current.scrollToIndex({
                                                    animated: true,
                                                    index: parseInt(currentIndex) + 1,
                                                });
                                            }
                                        }}
                                    >
                                        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View className="items-center justify-center mt-4">
                            <View
                                className="flex-row justify-between items-center mb-5"
                            >
                                <View className="flex-row justify-center items-center">
                                    {arrowCarouselData.map((item, index) => {
                                        return (
                                            <View
                                                className={`${currentIndex === index ? "w-[10]" : "w-[8]"
                                                    } h-[8] rounded-full ${currentIndex === index ? "bg-[#F83758]" : "bg-[#17223B33]"
                                                    } ml-1`}
                                                key={index}
                                            ></View>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>

                        <View className="px-5 text-sm">
                            <Text className="font-bold">Size: {selectedSize ? selectedSize : 'Not Selected'}</Text>
                            <View className="flex-row gap-2 mt-1">
                                {sizeData.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        className={`${selected === item.id ? 'bg-[#FA7189]' : 'bg-white'} border-[1.5px] border-[#FA7189] px-2 py-1 rounded`}
                                        onPress={() => {
                                            handleSelect(item.id);
                                            setSelectedSize(item.label)
                                        }}
                                    >
                                        <Text className={`${selected === item.id ? 'text-white' : 'text-[#FA7189]'}`}>{item.label}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View>
                                <Text className="font-bold text-xl">Nike Sneakers</Text>
                                <Text className="text-sm">Vision Alta Men’s Shoes Size (All Colours)</Text>
                                <View className="flex-row mt-1">
                                    <StarRating
                                        starStyle={{
                                            marginHorizontal: -1
                                        }}
                                        rating={4.5}
                                        starSize={18}
                                        emptyColor='#bbbbbb'
                                    />
                                    <Text cla ssName="text-[14px] text-[#A4A9B3]">45,674</Text>
                                </View>
                                <View className="flex-row gap-3 mt-1">
                                    <Text className="line-through text-[#A4A9B3]">₹2,999</Text>
                                    <Text className="">₹1,500</Text>
                                    <Text className="font-bold text-[#FA7189]">50% Off</Text>
                                </View>
                                <View className="mt-4">
                                    <Text className="font-semibold">Product Details</Text>
                                    <Text className="text-xs">Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...More</Text>
                                </View>
                                <View className="flex-row px-5 mt-4">
                                    <TouchableOpacity>
                                        <LinearGradient
                                            colors={['#3F92FF', '#0B3689']}
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            className="relative pl-7 pr-2 py-2 rounded-md "
                                        >
                                            <Text className="text-white">Go to cart</Text>
                                        </LinearGradient>
                                        <LinearGradient
                                            colors={['#3F92FF', '#0B3689']}
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            className="p-2 absolute rounded-full bg-red-500 -left-5 -top-0.5"
                                        >
                                            <AntDesign name="shoppingcart" size={24} color="white" />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="ml-8" onPress={()=> expoRouter.navigate('/checkout')}>
                                        <LinearGradient
                                            colors={['#71F9A9', '#31B769']}
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            className="relative pl-7 pr-2 py-2 rounded-md "
                                        >
                                            <Text className="text-white">Buy Now </Text>
                                        </LinearGradient>
                                        <LinearGradient
                                            colors={['#71F9A9', '#31B769']}
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            className="p-2 absolute rounded-full bg-red-500 -left-5 -top-0.5"
                                        >
                                            <AntDesign name="shoppingcart" size={24} color="white" />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>

                                <View className="bg-[#FFCCD5] px-4 py-2 rounded-lg mt-4">
                                    <Text className="text-sm">
                                        Delivery in
                                    </Text>
                                    <Text className="text-[21px] font-bold">
                                        1 within Hour
                                    </Text>
                                </View>

                                <View className="flex-row justify-between mt-4">
                                    <View className="bg-white border-[1px] border-[#D9D9D9] w-[47%] flex-row items-center p-3 rounded-lg">
                                        <AntDesign name="eyeo" size={24} color="black" />
                                        <Text className='ml-3'>View Similar</Text>
                                    </View>
                                    <View className="bg-white border-[1px] border-[#D9D9D9] w-[47%] flex-row items-center p-3 rounded-lg">
                                        <AntDesign name="eyeo" size={24} color="black" />
                                        <Text className='ml-3'>Add to Compare</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="mt-4">
                                <Text className="text-xl font-bold">Similar To</Text>
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-lg font-bold">282+ Items</Text>
                                    <View className="flex-row">
                                        <TouchableOpacity className="bg-white rounded-md flex-row items-center px-2 py-1 mr-3">
                                            <Text className="mr-1">Sort</Text>
                                            <Image source={require('../assets/arrows.png')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity className="bg-white rounded-md flex-row items-center px-2 py-1">
                                            <Text className="mr-1">Filter</Text>
                                            <Image source={require('../assets/arrows.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View className="flex-wrap flex-row mt-4">
                                    <TouchableOpacity className="w-[170px] h-[241px] rounded-lg overflow-hidden mx-2" onPress={() => expoRouter.navigate('../shop')}>
                                        <Image source={require('../assets/kurta.png')} />
                                        <View className=" bg-white p-2 rounded-b-lg">
                                            <Text className=" font-bold" >
                                                HRX by Hrithik Roshan
                                            </Text>
                                            <Text className=" text-[10px] mt-1" >
                                                Neque porro quisquam est qui dolorem ipsum quia
                                            </Text>
                                            <Text className=" text-xs font-bold mt-1" >
                                                ₹1500
                                            </Text>
                                            <View className="flex-row mt-1">
                                                <StarRating
                                                    starStyle={{
                                                        marginHorizontal: -1
                                                    }}
                                                    rating={4.5}
                                                    starSize={14}
                                                    emptyColor='#bbbbbb'
                                                />
                                                <Text className="text-[10px] text-[#A4A9B3]"> 45,674</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-[170px] h-[241px] rounded-lg overflow-hidden mx-2" onPress={() => expoRouter.navigate('../shop')}>
                                        <Image source={require('../assets/kurta.png')} />
                                        <View className=" bg-white p-2 rounded-b-lg">
                                            <Text className=" font-bold" >
                                                HRX by Hrithik Roshan
                                            </Text>
                                            <Text className=" text-[10px] mt-1" >
                                                Neque porro quisquam est qui dolorem ipsum quia
                                            </Text>
                                            <Text className=" text-xs font-bold mt-1" >
                                                ₹1500
                                            </Text>
                                            <View className="flex-row mt-1">
                                                <StarRating
                                                    starStyle={{
                                                        marginHorizontal: -1
                                                    }}
                                                    rating={4.5}
                                                    starSize={14}
                                                    emptyColor='#bbbbbb'
                                                />
                                                <Text className="text-[10px] text-[#A4A9B3]"> 45,674</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-[170px] h-[241px] rounded-lg overflow-hidden mx-2" onPress={() => expoRouter.navigate('../shop')}>
                                        <Image source={require('../assets/kurta.png')} />
                                        <View className=" bg-white p-2 rounded-b-lg">
                                            <Text className=" font-bold" >
                                                HRX by Hrithik Roshan
                                            </Text>
                                            <Text className=" text-[10px] mt-1" >
                                                Neque porro quisquam est qui dolorem ipsum quia
                                            </Text>
                                            <Text className=" text-xs font-bold mt-1" >
                                                ₹1500
                                            </Text>
                                            <View className="flex-row mt-1">
                                                <StarRating
                                                    starStyle={{
                                                        marginHorizontal: -1
                                                    }}
                                                    rating={4.5}
                                                    starSize={14}
                                                    emptyColor='#bbbbbb'
                                                />
                                                <Text className="text-[10px] text-[#A4A9B3]"> 45,674</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}