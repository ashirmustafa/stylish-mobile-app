import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './splashScreen';
import { useNavigation } from 'expo-router';

const Index = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return (
        <SplashScreen />
    );
}

const styles = StyleSheet.create({})

export default Index;
