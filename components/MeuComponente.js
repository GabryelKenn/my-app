import React from "react";
import { Text } from "react-native";

export default function MeuComponente(props) {
    const { min, max } = props;

    const maxValue = Math.max(parseInt(min), parseInt(max));

    return (
        <Text>O valor máximo é: {maxValue}</Text>
    );
}

