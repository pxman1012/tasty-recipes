import { ActivityIndicator, View } from 'react-native';

export default function Loading() {
    return (
        <View
            style={{
                marginTop: 40,
            }}
        >
            <ActivityIndicator size="large" />
        </View>
    );
}