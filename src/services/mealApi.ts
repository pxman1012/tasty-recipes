import { Meal } from '@/types/meal';

const BASE_URL =
    'https://www.themealdb.com/api/json/v1/1';

export const searchMeals = async (
    query: string
): Promise<Meal[]> => {
    const response = await fetch(
        `${BASE_URL}/search.php?s=${query}`
    );

    const data = await response.json();

    return data.meals || [];
};

export const getMealDetail = async (
    id: string
): Promise<Meal> => {
    const response = await fetch(
        `${BASE_URL}/lookup.php?i=${id}`
    );

    const data = await response.json();

    return data.meals[0];
};