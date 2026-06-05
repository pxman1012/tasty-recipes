import { router } from 'expo-router';
import { useEffect } from 'react';
import {
    Dimensions,
    Image,
    View,
} from 'react-native';

export default function WelcomeScreen() {
    const screenWidth =
        Dimensions.get('window').width;

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/(tabs)');
            // console.log('redirect to home')
            // router.replace('/');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#FFF8F0',
            }}
        >
            <Image
                source={require('@/assets/splash.png')}
                style={{
                    width: screenWidth,
                    height: screenWidth * 1.78,
                }}
                // resizeMode="contain"
                resizeMode="cover"
            />
        </View>
    );
}