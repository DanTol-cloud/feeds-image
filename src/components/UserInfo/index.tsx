import { FC } from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import { Theme } from "../../context/types";

interface UserInfoPropsI {
  name: string;
  email: string;
  avatar: string;
  themed: Theme;
}

const Userinfo: FC<UserInfoPropsI> = ({ name, email, avatar, themed }) => {
  return (
    <View style={[styles.container, { backgroundColor: themed.items }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, { color: themed.textColor }]}>
          Name: {name}
        </Text>
        <Text style={[styles.infoText, { color: themed.textColor }]}>
          Email: {email}
        </Text>
      </View>
    </View>
  );
};

export default Userinfo;
