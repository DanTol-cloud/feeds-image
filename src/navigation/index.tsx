import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AuthenticationSelector } from "../redux/Authentication/selector";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FeedNav from "./feedNav";
import AuthNav from "./authNav";

const Navigation = () => {
  const { data } = useSelector(AuthenticationSelector);
  const [accessUserData, setAccessUserData] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem("userData");
      setAccessUserData(userData);
    };

    getUserData();
  }, [data]);

  return accessUserData ? <FeedNav /> : <AuthNav />;
};

export default Navigation;
