import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { lightColor, primaryColor } from '../styles/GlobalStyles';
import { HomeStack, MyKitStack, ProfileStack, VideoStack } from './StackRoutes';

const Tab = createBottomTabNavigator();

const BottomTabRoutes = () => {
    const tabRoutes = [
        {
            name: "Home",
            component: HomeStack,
            label: "Home",
            width: 30,
            height: 30,
            header: false,
        },
        {
            name: "MyKit",
            component: MyKitStack,
            label: "My Kit",
            width: 30,
            height: 30,
            header: false,
        },
        {
            name: "Videos",
            component: VideoStack,
            label: "Videos",
            width: 35,
            height: 30,
            header: false,
        },

        {
            name: "You",
            component: ProfileStack,
            label: "You",
            width: 35,
            height: 30,
            header: false,
        },
    ]
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let routeName = route.name;
                    let iconComponent;

                    if (routeName === "Home") {
                        iconName = focused ? 'home' : 'home-outline';
                        iconComponent = <MaterialCommunityIcons name={iconName} size={size} color={focused ? lightColor : color} />

                    } else if (routeName === "MyKit") {
                        iconName = focused ? 'CodeSandbox' : 'CodeSandbox';
                        iconComponent = <AntDesign name={iconName} size={size} color={focused ? lightColor : color} />
                    } else if (routeName === "Videos") {
                        iconName = focused ? 'youtube-subscription' : 'youtube-subscription';
                        iconComponent = <MaterialCommunityIcons name={iconName} size={size} color={focused ? lightColor : color} />
                    }
                    else if (routeName === "You") {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                        iconComponent = <Ionicons name={iconName} size={size} color={focused ? lightColor : color} />
                    }

                    return (
                        <View style={focused ? styles.activeIconWrapper : styles.iconWrapper}>
                            {iconComponent}
                        </View>
                    );
                },
                tabBarActiveTintColor: '#1a1a1a',
                tabBarInactiveTintColor: '#595959',
                tabBarStyle: {
                    backgroundColor: '#fff'

                },
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                },
            })}
        >
            {
                tabRoutes?.map((tab) => {
                    return (
                        <Tab.Screen
                            name={tab?.name}
                            component={tab?.component}
                            key={tab?.name}

                            options={{
                                tabBarLabel: tab?.label,
                                headerShown: tab?.header,

                            }}
                        />
                    )
                })
            }

        </Tab.Navigator>
    )
}

export default BottomTabRoutes

const styles = StyleSheet.create({
    iconWrapper: {
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 50,
      minHeight: 30,
    },
    activeIconWrapper: {
      paddingHorizontal: 6,
      paddingVertical: 2,
      backgroundColor: '#e6e6e6',
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 50,
      minHeight: 30,
    },
  });
  

