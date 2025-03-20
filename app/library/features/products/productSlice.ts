import {Images} from '@images/index';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  exclusiveProduct: [
    {
      id:1,
      name: 'Oraganic Bananas',
      price: 30,
      content: '7pcs,Price',
      quantity: 1,
      productDetails:
        'Bananas are nutritious. Bananas may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Bananas are nutritious. Bananas may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Bananas are nutritious. Bananas may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 5,
      favorite: false,
      image: Images.product1,
    },
    {
      id:2,
      name: 'Capsicum',
      price: 70,
      content: '5pcs,Price',
      quantity: 1,
      productDetails:
        'Capsicum are nutritious. Capsicum may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Capsicum are nutritious. Capsicum may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Capsicum are nutritious. Capsicum may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 3,
      favorite: false,
      image: Images.product2,
    },
    {
      id:3,

      name: 'Red Apple',
      price: 70,
      content: '5pcs,Price',
      quantity: 1,
      productDetails:
        'Apple are nutritious. Apple may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Apple are nutritious. Capsicum may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Apple are nutritious. Apple may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 3,
      favorite: false,
      image: Images.product3,
    },
    {
      id:4,

      name: 'Ginger',
      price: 100,
      content: '5pcs,Price',
      quantity: 1,
      productDetails:
        'Ginger are nutritious. Ginger may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Ginger are nutritious. Ginger may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Ginger are nutritious. Ginger may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 4,
      favorite: false,
      image: Images.product2,
    },
  ],
  bestsellingProducts: [
    {
      id:1,

      name: 'Bread',
      price: 120,
      content: '7pcs,Price',
      quantity: 1,
      productDetails:
        'Bread are nutritious. Bread may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Bread are nutritious. Bread may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Bread are nutritious. Bread may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 2,
      favorite: false,
      image: Images.product5,
    },
    {
      id:2,
      name: 'Beverages',
      price: 90,
      content: '5pcs,Price',
      quantity: 1,
      productDetails:
        'Beverages are nutritious. Beverages may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Beverages are nutritious. Beverages may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Beverages are nutritious. Beverages may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 3,
      favorite: false,
      image: Images.product6,
    },
    {
      id:3,
      name: 'Fruits',
      price: 200,
      content: '5pcs,Price',
      quantity: 1,
      productDetails:
        'Fruits are nutritious. Fruits may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Fruits are nutritious. Fruits may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Fruits are nutritious. Fruits may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 4,
      favorite: false,
      image: Images.product7,
    },
    {
      id:4,
      name: 'Oil',
      price: 190,
      content: '5pcs,Price',
      quantity: 1,
      productDetails:
        'Oil are nutritious. Oil may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Oil are nutritious. Oil may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Oil are nutritious. Oil may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 4,
      favorite: false,
      image: Images.product8,
    },

    {
      id:5,
      name: 'Meat',
      price: 220,
      content: '5pcs,Price',
      quantity: 1,
      productDetails:
        'Meat are nutritious. Meat may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      nutritionsDetails:
        'Meat are nutritious. Meat may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      reviewDetails:
        'Meat are nutritious. Meat may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.',
      rating: 4,
      favorite: false,
      image: Images.product9,
    },
  ],
  categories: [
    {
      name: 'Bread',
      image: Images.product5,
    },
    {
      name: 'Beverages',
      image: Images.product6,
    },
    {
      name: 'Fruits',
      image: Images.product7,
    },
    {
      name: 'Oil',
      image: Images.product8,
    },

    {
      name: 'Meat',
      image: Images.product9,
    },
    {
      name: 'Bread',
      image: Images.product5,
    },
    {
      name: 'Beverages',
      image: Images.product6,
    },
    {
      name: 'Fruits',
      image: Images.product7,
    },
    {
      name: 'Oil',
      image: Images.product8,
    },

    {
      name: 'Meat',
      image: Images.product9,
    },
  ],
};

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    setExclusive: (state, action) => {
      console.log('token toolkit', action.payload);
      state.userData = action?.payload?.data;
    },
  },
});

export const {setUserData} = productSlice.actions;

export const userState = (state: any) => state.Productt;

export default productSlice.reducer;
