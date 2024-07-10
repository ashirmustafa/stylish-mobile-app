import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from '../../components/TabBar';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 27,
                    left: 16,
                    right: 16,
                    height: 72,
                    elevation: 0,
                    backgroundColor: 'white',
                    borderRadius: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                }
            }}
        >
            <Tabs.Screen name='home' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0">
                        <Ionicons name={focused ? "home" : 'home-outline'} color={focused ? 'red' : 'gray'} size={25} />
                        <Text style={{ color: focused ? 'red' : 'gray' }}>Home</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name='wishList' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0">
                        <Ionicons name="heart" color={focused ? 'red' : 'gray'} size={25} />
                        <Text style={{ color: focused ? 'red' : 'gray' }}>Wishlist</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name='cart' options={{
                tabBarIcon: ({ focused }) => (
                    <View className={`items-center p-3 rounded-full justify-center shadow-2xl absolute -top-3 ${focused ? 'bg-red-400' : 'bg-white'}`}>
                        <Ionicons name="cart" color={focused ? 'white' : 'gray'} size={25} />
                    </View>
                )
            }} />
            <Tabs.Screen name='search' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0" >
                        <Ionicons name="search" color={focused ? 'red' : 'gray'} size={25} />
                        <Text style={{ color: focused ? 'red' : 'gray' }}>Search</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name='settings' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0">
                        <Ionicons name="settings" color={focused ? 'red' : 'gray'} size={25} />
                        <Text style={{ color: focused ? 'red' : 'gray' }}>Settings</Text>
                    </View>
                )
            }} />

        </Tabs>
    );
}

const styles = StyleSheet.create({})

export default Layout;
