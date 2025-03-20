import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {publicStacks} from './publicStacks';
import {privateStacks} from './privateStacks';
import {useAppDispatch, useAppSelector} from '@hooks/index';
import {StName, storage} from '@utils/index';
import {navigate} from './rootNavigation';
import {setToken} from '@library/features/auth/authSlice';

const StackMenu = () => {
  const Stack = createNativeStackNavigator();

  const token = useAppSelector(state => state?.auth?.token);
  const dispatch = useAppDispatch();

  const authToken = storage.getString(StName.authtoken);
  useEffect(() => {
    console.log(
      token,

      storage.getString(StName.authtoken),
    );
    const tempToken = storage.getString(StName.authtoken);
    dispatch(setToken({token: JSON.parse(tempToken || null)}));

    console.log(
      token,
      '##################token status stack menu after ***************#####################',
      storage.getString(StName.authtoken),
    );
    // setAuthTokenState();
    // const pendingdata = storage.getString(StName.setupPending);
    // const parseData = pendingdata ? JSON.parse(pendingdata) : null;
    // console.log(parseData, 'pendingdata parsed');
    // setAuthSetupPending(parseData?.pending);
    // if (parseData?.pending == 'true') {
    //   ToastMessage(999, 'Please update your profile to proceed.');
    //   navigate('registerScreen', {
    //     userData: parseData?.userData,
    //   });
    // }
  }, [token, storage.getString(StName.authtoken)]);

  console.log(authToken, 'stack menu token: ');
  const stacks = token || authToken ? privateStacks : publicStacks;

  return (
    <>
      <Stack.Navigator
        // initialRouteName={!AuthSetupPending ? null : 'registerScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        {stacks.map(fields => {
          const {name, component} = fields;

          return (
            <Stack.Screen
              options={{
                title: name,
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                ...fields?.animations,
              }}
              key={name}
              name={name}
              component={component}
            />
          );
        })}
      </Stack.Navigator>
    </>
  );
};

export default StackMenu;
