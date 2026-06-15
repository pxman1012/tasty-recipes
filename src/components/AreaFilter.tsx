import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Props {
    areas: string[];
    selected: string;
    onSelect: (value: string) => void;
}

export default function AreaFilter({
    areas,
    selected,
    onSelect,
}: Props) {
    return (
        <View style={styles.wrapper}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={
                    false
                }
                contentContainerStyle={
                    styles.content
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
                    <Text>
                        All Areas
                    </Text>
                </Pressable>

                {areas.map(area => (
                    <Pressable
                        key={area}
                        style={[
                            styles.item,
                            selected ===
                            area &&
                            styles.selected,
                        ]}
                        onPress={() =>
                            onSelect(area)
                        }
                    >
                        <Text>
                            {area}
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
        marginBottom: 12,
    },

    content: {
        alignItems: 'center',
    },

    item: {
        height: 40,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginRight: 8,
    },

    selected: {
        backgroundColor: '#FF8C42',
    },
});