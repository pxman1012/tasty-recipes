import {
    useEffect,
    useState,
} from 'react';

import {
    filterByArea,
    filterByCategory,
    searchMeals,
} from '@/services/mealApi';

import { Meal } from '@/types/meal';

export const useRecipes = (
    query: string,
    category: string,
    area: string
) => {
    const [recipes, setRecipes] =
        useState<Meal[]>([]);

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {
        loadRecipes();
    }, [query, category, area]);

    const loadRecipes = async () => {
        try {
            setLoading(true);

            let data: Meal[] = [];

            if (query.trim()) {
                data =
                    await searchMeals(
                        query
                    );
            } else if (category) {
                data =
                    await filterByCategory(
                        category
                    );
            } else if (area) {
                data =
                    await filterByArea(
                        area
                    );
            } else {
                data =
                    await searchMeals('');
            }

            setRecipes(data);
        } finally {
            setLoading(false);
        }
    };

    return {
        recipes,
        loading,
    };
};