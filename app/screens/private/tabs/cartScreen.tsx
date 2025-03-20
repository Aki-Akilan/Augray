import { View, Text } from 'react-native'
import React from 'react'
import {CustomButton} from '@molecules/index';
import {windStyles} from '@utils/windStyles';
import {sizeConfig} from '@utils/sizeConfig';
import {storage} from '@utils/index';
import {useAppDispatch} from '@hooks/index';
import {setToken} from '@library/features/auth/authSlice';

const CartScreen = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    storage.clearAll();
    dispatch(setToken({token: null}));
    dispatch({type: 'RESET_STATE'});
  };
  return (
    <View className={windStyles.fxcenter}>
    <View className="w-full" style={{paddingHorizontal: sizeConfig.vs(30)}}>
      <CustomButton
        onClick={handleLogout}
        style={'font-fsm text-whitev1'}
        size={18}
        content={'Logout'}
      />
    </View>
  </View>
  )
}

export default CartScreen