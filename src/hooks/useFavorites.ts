import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

import { getFavorites } from '@/storage/favorite';
import { Meal } from '@/types/meal';


export const useFavorites = () => {
    const [favorites, setFavorites] =
        useState<Meal[]>([]);

    const loadFavorites = async () => {
        const data = await getFavorites();

        setFavorites(data);
    };

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    return {
        favorites,
    };
};