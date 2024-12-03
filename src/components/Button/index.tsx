import { FC } from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

import { Theme } from "../../context/types";

import styles from "./styles";

interface ButtonPropsI {
  onPress: (value: any) => any;
  text: string;
  loading?: boolean;
  themed: Theme;
}

const Button: FC<ButtonPropsI> = ({ onPress, text, loading, themed }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: themed.items }]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={16} color={"blue"} />
      ) : (
        <Text style={[styles.buttonText, { color: themed.textColor }]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
