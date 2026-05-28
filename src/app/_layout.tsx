import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />

            <Stack.Screen
                name="recipe/[id]"
                options={{
                    headerShown: true,
                    title: 'Recipe Detail',
                }}
            />
        </Stack>
    );
}