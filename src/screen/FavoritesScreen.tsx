import {
    FlatList,
    StyleSheet,
} from 'react-native';

import EmptyState from '@/components/EmptyState';
import RecipeCard from '@/components/RecipeCard';

import { useFavorites } from '@/hooks/useFavorites';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FavoritesScreen() {
    const { favorites } = useFavorites();

    return (
        <SafeAreaView style={styles.container}>
            {favorites.length === 0 ? (
                <EmptyState />
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={item => item.idMeal}
                    renderItem={({ item }) => (
                        <RecipeCard item={item} />
                    )}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF8F0',
    },
});