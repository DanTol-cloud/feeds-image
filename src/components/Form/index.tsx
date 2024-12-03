import { FC } from "react";
import { View, TextInput, Text } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";

import { Theme } from "../../context/types";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

interface FormPropsI {
  control: Control<{
    email: string;
    password: string;
  }>;
  errors: FieldErrors<{
    email: string;
    password: string;
  }>;
  placeholder: string;
  name: "email" | "password";
  themed: Theme;
  securable?: boolean;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
}

const Form: FC<FormPropsI> = ({
  control,
  errors,
  placeholder,
  name,
  themed,
  securable,
  showPassword,
  toggleShowPassword,
}) => {
  return (
    <View style={styles.formContainer}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <View style={[styles.container, { backgroundColor: themed.formBg }]}>
            <TextInput
              secureTextEntry={securable && !showPassword}
              placeholder={placeholder}
              placeholderTextColor={themed.textColor}
              onChangeText={onChange}
              value={value}
              style={[styles.form, { color: themed.textColor }]}
            />
            {securable && (
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#aaa"
                style={styles.icon}
                onPress={toggleShowPassword}
              />
            )}
          </View>
        )}
        name={name}
      />
      {name === "email" && errors.email && (
        <Text style={styles.errors}>{errors.email.message}</Text>
      )}
      {name === "password" && errors.password && (
        <Text style={styles.errors}>{errors.password.message}</Text>
      )}
    </View>
  );
};

export default Form;
