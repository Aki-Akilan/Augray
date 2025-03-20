import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {tabStacks} from './tabStacks';
import {
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {sizeConfig} from '@utils/sizeConfig';
import {Colors} from '@theme/colors';
import {useAppSelector} from '@hooks/index';
const Tab = createBottomTabNavigator();


const TabMenus = () => {
  const user = useAppSelector(state => state?.userprofile?.userData);
  console.log(user, 'userkjdhqd');

  const {ms, vs} = sizeConfig;

  const handleTabOptions = (
    item: any,
    i: number,
    fields: any,
  ): BottomTabNavigationOptions => {
    const {label} = fields;
    console.log(fields,"fields handleTabOptions")
    return {
      tabBarLabel: label,
      tabBarLabelStyle: {
        fontFamily: 'Inter-SemiBold',
        fontSize: ms(10),
        marginBottom: vs(4),
      },
      tabBarItemStyle: {},
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        height: vs(Platform.OS == 'ios' ? 65 : 45),
        paddingTop: vs(5),
        borderColor: '#FFB5BB',
      },

      tabBarIcon: ({focused, color}): any =>
        handleTabIcon( fields, color, i, ),
    };
  };

  const handleTabIcon = (fields: any, color: string, i: number) => {
    const {Icon} = fields;
    console.log(Icon, 'Icon',fields);
    return (
      <View key={i}>
        <Icon color={color} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.secondary,
      }}>
      {tabStacks.map((fields, i) => {
        const {name, component} = fields;
        return (
          <Tab.Screen
            options={item => ({
              ...handleTabOptions(item, i, fields),
              tabBarButton: props => (
                <TouchableWithoutFeedback {...props}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {props.children}
                  </View>
                </TouchableWithoutFeedback>
              ),
            })}
            key={name}
            name={name}
            component={component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabMenus;
