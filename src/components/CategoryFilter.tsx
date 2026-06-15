import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Props {
    categories: string[];
    selected: string;
    onSelect: (value: string) => void;
}

export default function CategoryFilter({
    categories,
    selected,
    onSelect,
}: Props) {
    return (
        <View style={styles.wrapper}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={
                    styles.contentContainer
                }
            >
                <Pressable
                    style={[
                        styles.item,
                        !selected &&
                        styles.selected,
                    ]}
                    onPress={() =>
                        onSelect('')
                    }
                >
                    <Text
                        style={[
                            styles.text,
                            !selected &&
                            styles.selectedText,
                        ]}
                    >
                        All
                    </Text>
                </Pressable>

                {categories.map(category => (
                    <Pressable
                        key={category}
                        style={[
                            styles.item,
                            selected ===
                            category &&
                            styles.selected,
                        ]}
                        onPress={() =>
                            onSelect(category)
                        }
                    >
                        <Text
                            style={[
                                styles.text,
                                selected ===
                                category &&
                                styles.selectedText,
                            ]}
                        >
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        marginBottom: 16,
    },

    contentContainer: {
        alignItems: 'center',
        paddingRight: 8,
    },

    item: {
        height: 40,
        paddingHorizontal: 16,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#FFFFFF',
        borderRadius: 20,

        marginRight: 8,

        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },

        elevation: 2,
    },

    selected: {
        backgroundColor: '#FF8C42',
    },

    text: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },

    selectedText: {
        color: '#FFF',
        fontWeight: '700',
    },
});