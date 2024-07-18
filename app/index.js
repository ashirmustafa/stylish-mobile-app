import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './splashScreen';
import { useNavigation } from 'expo-router';
import Checkout from './checkout';
import PlaceOrder from './placeOrder';

const Index = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return (
        // <SplashScreen />
        <PlaceOrder />
    );
}

const styles = StyleSheet.create({})

export default Index;
