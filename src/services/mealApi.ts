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

export const getCategories =
    async (): Promise<string[]> => {
        const response = await fetch(
            `${BASE_URL}/list.php?c=list`
        );

        const data = await response.json();

        return data.meals.map(
            (item: any) =>
                item.strCategory
        );
    };

export const getAreas =
    async (): Promise<string[]> => {
        const response = await fetch(
            `${BASE_URL}/list.php?a=list`
        );

        const data = await response.json();

        return data.meals.map(
            (item: any) => item.strArea
        );
    };

export const filterByCategory =
    async (
        category: string
    ): Promise<Meal[]> => {
        const response = await fetch(
            `${BASE_URL}/filter.php?c=${category}`
        );

        const data = await response.json();

        return data.meals || [];
    };

export const filterByArea =
    async (
        area: string
    ): Promise<Meal[]> => {
        const response = await fetch(
            `${BASE_URL}/filter.php?a=${area}`
        );

        const data = await response.json();

        return data.meals || [];
    };