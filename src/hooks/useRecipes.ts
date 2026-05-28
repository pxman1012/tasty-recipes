import { useEffect, useState } from 'react';
import { searchMeals } from '@/services/mealApi';
import { Meal } from '@/types/meal';

export const useRecipes = (
    query: string
) => {
    const [recipes, setRecipes] = useState<Meal[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadRecipes();
    }, [query]);

    const loadRecipes = async () => {
        try {
            setLoading(true);

            const data = await searchMeals(query);

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