import {
    StyleSheet,
    TextInput,
} from 'react-native';

interface Props {
    value: string;
    onChange: (text: string) => void;
}

export default function SearchBar({
    value,
    onChange,
}: Props) {
    return (
        <TextInput
            placeholder="Search recipes..."
            value={value}
            onChangeText={onChange}
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 12,
        marginBottom: 20,
    },
});