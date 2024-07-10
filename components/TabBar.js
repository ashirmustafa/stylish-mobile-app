import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {
    const icons = {
        home: (props) => <AntDesign name="home" size={26} color='gray' {...props}  />,
        wishList: (props) => <AntDesign name="heart" size={26} color='gray' {...props}  />,
        cart: (props) => <AntDesign name="shoppingcart" size={26} color='gray' {...props}  />,
        search: (props) => <Feather name="search" size={26} color='gray' {...props}  />,
        settings: (props) => <Feather name="settings" size={26} color='gray' {...props}  />
    }
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (            
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {console.log(route.name)}
            {
                icons[route.name]({
                    color: isFocused ? 'red' : 'gray'
                })
            }
            <Text style={{ color: isFocused ? "red" : "gray" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: "20",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  tabBarItem:{
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25
  }
});

export default TabBar;
