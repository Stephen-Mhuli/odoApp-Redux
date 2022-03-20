import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


const ButtonIcon = (props) => {
    const { iconName='exclamation-circle', size=24, color = 'black', onPress, Label } = props;

    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <FontAwesome name={iconName} size={size} color={color}/>
            <Text syle={styles.buttonLabelStyle}>{Label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    buttonLabelStyle: {
        margin: 5
    }
});

export default ButtonIcon;