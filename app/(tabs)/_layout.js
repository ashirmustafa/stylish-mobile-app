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
                    bottom: 0,
                    height: 72,
                    elevation: 0,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 5
                }
            }}
        >
            <Tabs.Screen name='home' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0">
                        <Ionicons name={focused ? "home" : 'home-outline'} color={focused ? '#EB3030' : 'black'} size={25} />
                        <Text style={{ color: focused ? 'red' : 'gray' }}>Home</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name='wishList' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0">
                        <Ionicons name="heart" color={focused ? '#EB3030' : 'black'} size={25} />
                        <Text style={{ color: focused ? 'red' : 'gray' }}>Wishlist</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name='cart' options={{
                tabBarIcon: ({ focused }) => (
                    <View className={`items-center p-4 rounded-full justify-center shadow-2xl absolute -top-3 ${focused ? 'bg-[#EB3030]' : 'bg-white'}`} style={styles.shadowDrop}>
                        <Ionicons name="cart" color={focused ? 'white' : 'black'} size={25} />
                    </View>
                )
            }} />
            <Tabs.Screen name='search' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0" >
                        <Ionicons name="search" color={focused ? '#EB3030' : 'black'} size={25} />
                        <Text style={{ color: focused ? '#EB3030' : 'black' }}>Search</Text>
                    </View>
                )
            }} />
            <Tabs.Screen name='settings' options={{
                tabBarIcon: ({ focused }) => (
                    <View className="items-center pt-0">
                        <Ionicons name="settings" color={focused ? '#EB3030' : 'black'} size={25} />
                        <Text style={{ color: focused ? '#EB3030' : 'black' }}>Settings</Text>
                    </View>
                )
            }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    shadowDrop: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 14,
        elevation: 2,
    }
})

export default Layout;
