import {
    FlatList,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import RecipeCard from '@/components/RecipeCard';
import EmptyState from '@/components/EmptyState';

import { useFavorites } from '@/hooks/useFavorites';

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