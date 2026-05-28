import {
    FlatList,
    StyleSheet,
} from 'react-native';

import { useState } from 'react';

import { useDebounce } from 'use-debounce';

import SearchBar from '@/components/SearchBar';
import RecipeCard from '@/components/RecipeCard';
import Loading from '@/components/Loading';
import EmptyState from '@/components/EmptyState';

import { useRecipes } from '@/hooks/useRecipes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const [search, setSearch] = useState('');

    const [debouncedValue] =
        useDebounce(search, 500);

    const { recipes, loading } =
        useRecipes(debouncedValue);

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                value={search}
                onChange={setSearch}
            />

            {loading ? (
                <Loading />
            ) : recipes.length === 0 ? (
                <EmptyState />
            ) : (
                <FlatList
                    data={recipes}
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