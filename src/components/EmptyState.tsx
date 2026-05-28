import { Text, View } from 'react-native';

export default function EmptyState() {
    return (
        <View
            style={{
                marginTop: 40,
                alignItems: 'center',
            }}
        >
            <Text>No recipes found 🍳</Text>
        </View>
    );
}