import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { router } from 'expo-router';

import { Meal } from '@/types/meal';

interface Props {
    item: Meal;
}

export default function RecipeCard({
    item,
}: Props) {
    return (
        <Pressable
            style={styles.card}
            onPress={() =>
                router.push({
                    pathname: '/recipe/[id]',
                    params: {
                        id: item.idMeal,
                    },
                })
            }
        >
            <Image
                source={{
                    uri: item.strMealThumb,
                }}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    {item.strMeal}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 16,
    },

    image: {
        width: '100%',
        height: 220,
    },

    content: {
        padding: 14,
    },

    title: {
        fontSize: 18,
        fontWeight: '700',
    },
});