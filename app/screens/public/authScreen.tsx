import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {windStyles} from '@utils/windStyles';
import {Images} from '@images/index';
import {sizeConfig} from '@utils/sizeConfig';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BarHeight} from '@utils/barHeight';
import {CustomImage, PrimaryText, SecondaryText} from '@atoms/index';
import {CustomButton, TextField} from '@molecules/index';
import {Colors} from '@theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {StName, storage} from '@utils/index';
import {StartAnimationHook, useAppDispatch} from '@hooks/index';
import {setToken} from '@library/features/auth/authSlice';
import Animated from 'react-native-reanimated';
import {starterAnimation} from '@animation/starterAnimation';

const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const {vs, ms} = sizeConfig;
  const shouldAnimate = StartAnimationHook();
  const [email,setemail]=useState("")
  const [password,setpasswoord]=useState("")

  const handleLogin = () => {
    storage.set(StName.authtoken, JSON.stringify('augray'));

    dispatch(setToken({token: 'augray'}));
  };
  const handleSignup = () => {};
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View className={`${windStyles.fx1} bg-white`}>
        <View className="absolute w-full z-10 top-0">
          <CustomImage
            mode={'cover'}
            source={Images.authBackground}
            style={{height: vs(200), width: '100%'}}
          />
        </View>
        <SafeAreaView
          className={`${windStyles.fx1}  z-20`}
          style={{paddingTop: BarHeight, paddingHorizontal: vs(20)}}>
          <View>
            <Animated.View
              {...(shouldAnimate
                ? starterAnimation('FadeInUp', 500, 500, 3)
                : {})}>
              <View className={windStyles.center}>
                <CustomImage
                  source={Images.authLogo}
                  style={{height: sizeConfig.vs(70), width: vs(70)}}
                />
              </View>
            </Animated.View>

            <View>
              <Animated.View
                {...(shouldAnimate
                  ? starterAnimation('FadeInUp', 500, 500, 1)
                  : {})}>
                <View
                  style={{
                    paddingVertical: vs(20),
                    marginTop: vs(40),
                    rowGap: vs(6),
                  }}>
                  <PrimaryText size={26} content="Login" />
                  <SecondaryText
                    style={'font-fm text-grayv2'}
                    size={14}
                    content="Enter your emails and password"
                  />
                </View>

                <View>
                  <View style={{rowGap: vs(20), marginTop: vs(20)}}>
                    <View>
                      <TextField
                        {...{
                          error: false,
                          label: 'Email',
                          currentValue: email,
                          handleChange: value => {
                            setemail(value)
                          },
                          placeholder: 'Enter your email',
                          holderColor: Colors.grayv2,
                          inputType: 'email-address',
                          inputStyle: {
                            marginLeft: ms(7),
                          },
                        }}
                      />
                    </View>

                    <View>
                      <TextField
                        {...{
                          error: false,
                          isPass: true,
                          label: 'Password',
                          currentValue: password,
                          handleChange: value => {setpasswoord(value)},
                          placeholder: 'Enter your password',
                          holderColor: Colors.grayv2,
                          inputType: 'email-address',
                          inputStyle: {
                            marginLeft: ms(7),
                          },
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Animated.View>

              <Animated.View
                {...(shouldAnimate
                  ? starterAnimation('FadeInDown', 1000, 1000, 1)
                  : {})}>
                <View
                  className="w-full"
                  style={{paddingHorizontal: ms(10), paddingTop: vs(20)}}>
                  <CustomButton
                    onClick={handleLogin}
                    style={'font-fsm text-whitev1'}
                    size={18}
                    content={'Log In'}
                  />
                </View>

                <View
                  className="flex-row flex-wrap  justify-center"
                  style={{paddingVertical: vs(15)}}>
                  <Text
                    className="font-fsm text-secondary"
                    style={{fontSize: ms(12), lineHeight: vs(18)}}>
                    Don’t have an account?
                  </Text>
                  <TouchableOpacity onPress={handleSignup}>
                    <Text
                      className="font-fsm text-primary"
                      style={{fontSize: ms(12), lineHeight: vs(18)}}>
                      {' '}
                      Singup
                    </Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AuthScreen;
