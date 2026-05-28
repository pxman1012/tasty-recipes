import RecipeDetailScreen from '@/screen/RecipeDetailScreen';
import { useLocalSearchParams } from 'expo-router';

export default function Detail() {
    const { id } = useLocalSearchParams();

    return <RecipeDetailScreen id={String(id)} />;
}