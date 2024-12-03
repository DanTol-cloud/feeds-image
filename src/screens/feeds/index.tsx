import { useCallback, useEffect } from "react";
import { ActivityIndicator, View, FlatList, Text } from "react-native";

import { useTheme } from "../../context/hook";

import FeedItem from "../../components/FeedItem";

import { useAppDispatch, UseAppSelector } from "../../redux/hooks";
import { fetchFeeds } from "../../redux/Feeds/thunk";
import { FeedsSelector } from "../../redux/Feeds/selectors";
import { PAGE_SIZE } from "../../redux/Feeds/slice";
import { FeedsDataType } from "../../redux/types";

import styles from "./styles";

const FeedScreen = () => {
  const { currentTheme } = useTheme();
  const dispatch = useAppDispatch();
  const {
    data: FeedsData,
    isLoading: FeedsIsLoading,
    page,
  } = UseAppSelector(FeedsSelector);

  useEffect(() => {
    dispatch(fetchFeeds(page));
  }, []);

  const fetchMoreData = () => {
    if (!FeedsIsLoading) dispatch(fetchFeeds(page));
  };

  const renderItem = useCallback(
    ({ item }: { item: FeedsDataType }) => <FeedItem item={item} />,
    [FeedsData]
  );

  const renderFooter = () => {
    if (FeedsData.length % PAGE_SIZE !== 0 && FeedsData.length > 0)
      return <Text>No more items to load</Text>;

    return FeedsIsLoading ? (
      <ActivityIndicator size="large" color="blue" />
    ) : null;
  };

  const keyExtractor = (item: FeedsDataType) => `#${item.id}_${item.author}`;

  if (FeedsIsLoading && page === 1)
    return <ActivityIndicator size="large" color={"blue"} />;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <FlatList
        data={FeedsData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreData}
      />
    </View>
  );
};

export default FeedScreen;
