import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { useForm } from "react-hook-form";

import { useTheme } from "../../context/hook";

import Button from "../../components/Button";
import Form from "../../components/Form";

import { useAppDispatch, UseAppSelector } from "../../redux/hooks";
import { fetchAuthentication } from "../../redux/Authentication/thunk";
import { AuthenticationSelector } from "../../redux/Authentication/selector";

import schema from "./schema";

import styles from "./styles";

interface IFormInput {
  email: string;
  password: string;
}

const AuthenticationScreen = () => {
  const dispatch = useAppDispatch();
  const { data: AuthenticationData, isLoading: AuthenticationIsLoading } =
    UseAppSelector(AuthenticationSelector);

  const { currentTheme } = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: schema,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = (userData: IFormInput) => {
    dispatch(fetchAuthentication(userData));
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (typeof AuthenticationData === "string") {
      Alert.alert("User not found");
    }
  }, [AuthenticationData]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <View style={styles.formContainer}>
        <Form
          control={control}
          errors={errors}
          name="email"
          placeholder="Email"
          themed={currentTheme}
        />

        <Form
          control={control}
          errors={errors}
          name="password"
          placeholder="Password"
          themed={currentTheme}
          securable
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button
          onPress={handleSubmit(onLoginSubmit)}
          text="Log in"
          loading={AuthenticationIsLoading}
          themed={currentTheme}
        />
      </View>
    </View>
  );
};

export default AuthenticationScreen;
