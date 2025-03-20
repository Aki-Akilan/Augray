import {AuthScreen, WelcomeScreen} from '@public/index';

export const publicStacks = [
  {
    name: 'welcome',
    component: WelcomeScreen,
    animations: {
      animation: 'fade',
      animationDuration: 500,
    },
  },
  {
    name: 'auth',
    component: AuthScreen,
    // component: OtpScreen,
    animations: {
      animation: 'slide_from_right',
      animationDuration: 500,
    },
  },
];
