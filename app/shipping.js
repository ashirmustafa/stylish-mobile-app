import { View, Text, Image, TouchableOpacity, Modal, Button, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";

export default function Shipping() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View className='bg-white h-full'>
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
            <View className="bg-[#C6C6C6] h-[1px] w-full mt-7" />
            <View className="px-5 mt-5">
                <View className="flex-row justify-between">
                    <Text className='text-lg text-[#A8A8A9] font-normal'>Order</Text>
                    <Text className='text-lg text-[#A8A8A9] font-normal'>7,000</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className='text-lg text-[#A8A8A9] font-normal'>Shipping</Text>
                    <Text className='text-lg text-[#A8A8A9] font-normal'>30</Text>
                </View>
                <View className="flex-row justify-between mt-3">
                    <Text className='text-lg  font-normal'>Total</Text>
                    <Text className='text-lg  font-normal'>7,030</Text>
                </View>
                <View className="bg-[#C4C4C4] h-[1px] w-full mt-7" />
            </View>

            <View className='px-5 mt-5'>
                <Text className="text-lg font-normal ">Payment</Text>

                <View className='flex-row justify-between bg-[#F4F4F4] py-5 px-7 rounded-xl border-2 border-red-500 mt-5'>
                    <Image source={require('../assets/visa.png')} />
                    <Text>*********2109</Text>
                </View>
                <View className='flex-row justify-between bg-[#F4F4F4] py-5 px-7 rounded-xl mt-5'>
                    <Image source={require('../assets/visa.png')} />
                    <Text>*********2109</Text>
                </View>
                <View className='flex-row justify-between bg-[#F4F4F4] py-5 px-7 rounded-xl mt-5'>
                    <Image source={require('../assets/visa.png')} />
                    <Text>*********2109</Text>
                </View>
                <View className='flex-row justify-between bg-[#F4F4F4] py-5 px-7 rounded-xl mt-5'>
                    <Image source={require('../assets/visa.png')} />
                    <Text>*********2109</Text>
                </View>

                <TouchableOpacity
                    className="bg-[#F83758] py-4 rounded-lg px-8 mt-5"
                    onPress={() => setModalVisible(true)}
                >
                    <Text className="text-xl font-extrabold text-white text-center">
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="bg-red-500 bg-[#00000080] h-full items-center justify-center">
                    <View className="bg-white p-5 rounded-md">
                        <Text>Payment done successfully.</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}