import { ActivityIndicator, View } from "react-native";

import { useEffect, useState } from "react";
import { useAppDispatch, UseAppSelector } from "../../redux/hooks";
import { fetchUserById } from "../../redux/User/thunk";
import { UserSelector } from "../../redux/User/selectors";
import { logOut } from "../../redux/Authentication/slice";

import styles from "./styles";
import Userinfo from "../../components/UserInfo";
import Button from "../../components/Button";
import { useTheme } from "../../context/hook";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const { currentTheme, toggleTheme } = useTheme();

  const dispatch = useAppDispatch();

  const { data: UserData, isLoading: UserIsLoading } =
    UseAppSelector(UserSelector);

  useEffect(() => {
    const handleEmail = async () => {
      const email = await AsyncStorage.getItem("userData");
      if (email) setUserEmail(JSON.parse(email).email);
    };

    handleEmail();

    dispatch(fetchUserById("4"));
  }, []);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  if (UserIsLoading) return <ActivityIndicator size={30} color={"blue"} />;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <Userinfo
        name={UserData.first_name}
        email={userEmail}
        avatar={UserData.avatar}
        themed={currentTheme}
      />

      <View style={styles.btnContainer}>
        <Button
          text={`Change theme to ${
            currentTheme.name === "light" ? "dark" : "light"
          }`}
          onPress={toggleTheme}
          themed={currentTheme}
        />

        <Button text="Logout" onPress={handleLogOut} themed={currentTheme} />
      </View>
    </View>
  );
};

export default Profile;
