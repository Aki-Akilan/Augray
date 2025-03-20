import {ProductDetails, PurchaseSuccess} from '@private/index';
import TabMenus from './tabMenus';

export const privateStacks = [
  {
    name: 'Home',
    component: TabMenus,
    animations: {
      animation: 'none',
      // animationDuration: 500,
    },
  },
  {
    name: 'productDetails',
    component: ProductDetails,
    animations: {
      animation: 'slide_from_right',
      animationDuration: 500,
    },
  },
  {
    name: 'purchaseSuccess',
    component: PurchaseSuccess,
    animations: {
      animation: 'slide_from_bottom',
      animationDuration: 500,
    },
  },
];
