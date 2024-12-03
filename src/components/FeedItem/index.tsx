import { FC } from "react";
import { Text, View, Image } from "react-native";

import { FeedsDataType } from "../../redux/types";

import styles from "./styles";

interface FeedItemPropsI {
  item: FeedsDataType;
}

const FeedItem: FC<FeedItemPropsI> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: item.download_url }}
        resizeMode={"cover"}
        alt={item.url}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.author}</Text>
      </View>
    </View>
  );
};

export default FeedItem;
