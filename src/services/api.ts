import axios from 'axios';
import { Meal } from '../types/recipe';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchMeals = async (
    text: string
): Promise<Meal[]> => {
    const response = await axios.get(
        `${BASE_URL}/search.php?s=${text}`
    );

    return response.data.meals || [];
};

export const getMealDetail = async (
    id: string
): Promise<Meal> => {
    const response = await axios.get(
        `${BASE_URL}/lookup.php?i=${id}`
    );

    return response.data.meals[0];
};