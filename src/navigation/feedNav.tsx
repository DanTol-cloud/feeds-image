import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FeedScreen from "../screens/feeds";
import Profile from "../screens/profile";
import { useTheme } from "../context/hook";

const Tab = createMaterialTopTabNavigator();

const FeedNav = () => {
  const { currentTheme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: currentTheme.backgroundColor,
        },
        tabBarItemStyle: {
          backgroundColor: currentTheme.items,
        },
        tabBarLabelStyle: {
          color: currentTheme.textColor,
        },
        
      }}
    >
      <Tab.Screen name={"Feeds"} component={FeedScreen} />
      <Tab.Screen name={"Profile"} component={Profile} />
    </Tab.Navigator>
  );
};

export default FeedNav;
