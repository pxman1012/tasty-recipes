import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native';

import {
    useEffect,
    useState,
} from 'react';

import { useDebounce } from 'use-debounce';

import CategoryFilter from '@/components/CategoryFilter';
import EmptyState from '@/components/EmptyState';
import Loading from '@/components/Loading';
import SearchBar from '@/components/SearchBar';

import { useRecipes } from '@/hooks/useRecipes';

import { SafeAreaView } from 'react-native-safe-area-context';

import RecipeCard from '@/components/RecipeCard';
import {
    getCategories
} from '@/services/mealApi';

export default function HomeScreen() {
    const [search, setSearch] =
        useState('');

    const [category, setCategory] =
        useState('');

    const [categories, setCategories] =
        useState<string[]>([]);

    const [area, setArea] =
        useState('');

    // const [areas, setAreas] =
    //     useState<string[]>([]);

    const [debouncedValue] =
        useDebounce(search, 500);

    const { recipes, loading } =
        useRecipes(
            debouncedValue,
            category,
            area
        );

    useEffect(() => {
        loadCategories();
        // loadAreas();
    }, []);

    const loadCategories =
        async () => {
            const data =
                await getCategories();

            setCategories(data);
        };

    // const loadAreas = async () => {
    //     const data =
    //         await getAreas();

    //     console.log(data);

    //     setAreas(data);
    // };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                value={search}
                onChange={setSearch}
            />

            <CategoryFilter
                categories={categories}
                selected={category}
                onSelect={value => {
                    setCategory(value);
                    setArea('');
                }}
            />

            {/* <AreaFilter
                areas={areas}
                selected={area}
                onSelect={value => {
                    setArea(value);
                    setCategory('');
                }}
            /> */}

            <View style={styles.listContainer}>
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
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={6}                      //Render 6 item đầu tiên.
                        maxToRenderPerBatch={6}                     // Render theo lô.
                        windowSize={5}                              // Giảm số item giữ trong memory.  
                        removeClippedSubviews
                        contentContainerStyle={{
                            paddingBottom: 20,
                        }}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF8F0',
    },

    listContainer: {
        flex: 1,
    },
});