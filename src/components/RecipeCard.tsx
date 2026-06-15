import {
    // Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Image } from 'expo-image';

import { router } from 'expo-router';

import { Meal } from '@/types/meal';
import { memo } from 'react';

interface Props {
    item: Meal;
}

function RecipeCard({ item }: Props) {
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
            {/* <Image
                source={{
                    uri: item.strMealThumb,
                }}
                style={styles.image}
            /> */}

            {/* <Image
                source={item.strMealThumb}
                style={styles.image}
                contentFit="cover"
                cachePolicy="memory-disk"
                transition={200}
            /> */}

            <Image
                source={item.strMealThumb}
                style={styles.image}
                contentFit="cover"
                cachePolicy="memory-disk"
                transition={200}
                // placeholder={require(
                //     '@/assets/placeholder.png'
                // )}
                placeholder={{
                    blurhash:
                        'LGFFaXYk^6#M@-5c,1J5@[or[Q6.'
                }}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    {item.strMeal}
                </Text>
            </View>
        </Pressable>
    );
}

export default memo(RecipeCard);

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