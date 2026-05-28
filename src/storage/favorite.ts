import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meal } from '@/types/meal';

const KEY = 'favorites';

export const getFavorites = async (): Promise<
    Meal[]
> => {
    const data = await AsyncStorage.getItem(KEY);

    return data ? JSON.parse(data) : [];
};

export const saveFavorite = async (
    meal: Meal
) => {
    const favorites = await getFavorites();

    const exists = favorites.some(
        item => item.idMeal === meal.idMeal
    );

    if (!exists) {
        favorites.push(meal);

        await AsyncStorage.setItem(
            KEY,
            JSON.stringify(favorites)
        );
    }
};

export const removeFavorite = async (
    id: string
) => {
    const favorites = await getFavorites();

    const filtered = favorites.filter(
        item => item.idMeal !== id
    );

    await AsyncStorage.setItem(
        KEY,
        JSON.stringify(filtered)
    );
};

export const isFavorite = async (
    id: string
) => {
    const favorites = await getFavorites();

    return favorites.some(
        item => item.idMeal === id
    );
};