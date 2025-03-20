import {AccountScreen, CartScreen, ExploreScreen, FavoriteScreen, ShopScreen} from '@tabs/index';
import {AccountVectorIcon, CartVectorIcon, ExploreVectorIcon, FavoriteVectorIcon, ShopVectorIcon} from '@vectors/vectorImages';

export const tabStacks = [
  {
    name: 'shop',
    component: ShopScreen,
    label: 'Shop',
    Icon: ShopVectorIcon,
  },
  {
    name: 'explore',
    component: ExploreScreen,
    label: 'Explore',
    Icon: ExploreVectorIcon,
  },
  {
    name: 'cart',
    component: CartScreen,
    label: 'Cart',
    Icon: CartVectorIcon,
  },
  {
    name: 'favorite',
    component: FavoriteScreen,
    
    label: 'Favorite',
    Icon: FavoriteVectorIcon,
  },
  {
    name: 'account',
    component: AccountScreen,
    
    label: 'Account',
    Icon: AccountVectorIcon,
  },
  
];
