import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useEffect, useState } from 'react';

import {
    getMealDetail,
} from '@/services/mealApi';

import {
    isFavorite,
    removeFavorite,
    saveFavorite,
} from '@/storage/favorite';

import { Meal } from '@/types/meal';

interface Props {
    id: string;
}

export default function RecipeDetailScreen({
    id,
}: Props) {
    const [meal, setMeal] =
        useState<Meal | null>(null);

    const [favorite, setFavorite] =
        useState(false);

    useEffect(() => {
        loadMeal();
    }, []);

    const loadMeal = async () => {
        const data = await getMealDetail(id);

        setMeal(data);

        const exists = await isFavorite(id);

        setFavorite(exists);
    };

    const handleFavorite = async () => {
        if (!meal) return;

        if (favorite) {
            await removeFavorite(meal.idMeal);

            setFavorite(false);
        } else {
            await saveFavorite(meal);

            setFavorite(true);
        }
    };

    if (!meal) return null;

    const ingredients = Object.keys(meal)
        .filter(key => key.startsWith('strIngredient'))
        .map(key => {
            const index = key.replace('strIngredient', '');

            const ingredient =
                meal[key as keyof Meal];

            const measure =
                meal[
                `strMeasure${index}` as keyof Meal
                ];

            return {
                ingredient:
                    typeof ingredient === 'string'
                        ? ingredient.trim()
                        : '',
                measure:
                    typeof measure === 'string'
                        ? measure.trim()
                        : '',
            };
        })
        .filter(item => item.ingredient);

    return (
        <ScrollView style={styles.container}>
            <Image
                source={{
                    uri: meal.strMealThumb,
                }}
                style={styles.image}
            />

            <Text style={styles.title}>
                {meal.strMeal}
            </Text>

            <Pressable
                style={[
                    styles.button,
                    {
                        backgroundColor: favorite
                            ? '#E74C3C'
                            : '#FF8C42',
                    },
                ]}
                onPress={handleFavorite}
            >
                <Text style={styles.buttonText}>
                    {favorite
                        ? '❤️ Remove Favorite'
                        : '🤍 Add To Favorites'}
                </Text>
            </Pressable>

            <Text style={styles.sectionTitle}>
                🥕 Ingredients
            </Text>

            <View style={styles.ingredientsContainer}>
                {ingredients.map((item, index) => (
                    <View
                        key={index}
                        style={styles.ingredientCard}
                    >
                        <Image
                            source={{
                                uri: `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                                    item.ingredient
                                )}.png`,
                            }}
                            style={styles.ingredientImage}
                        />

                        <Text style={styles.measure}>
                            {item.measure}
                        </Text>

                        <Text style={styles.ingredientName}>
                            {item.ingredient}
                        </Text>
                    </View>
                ))}
            </View>

            <Text style={styles.sectionTitle}>
                📖 Instructions
            </Text>

            <Text style={styles.instructions}>
                {meal.strInstructions}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F0',
    },

    image: {
        width: '100%',
        height: 300,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        padding: 16,
    },

    button: {
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 16,
        marginTop: 20,
        marginBottom: 12,
        color: '#2C3E50',
    },

    ingredientsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16
    },

    ingredientCard: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 16,
    },

    ingredientImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },

    measure: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },

    ingredientName: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },

    instructions: {
        padding: 16,
        fontSize: 16,
        lineHeight: 26,
    },
});