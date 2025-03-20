import {StName, storage} from '@utils/index';

const getToken = () => {
  const data = storage.getString(StName.authtoken);
  console.log(data, 'GetToken');
  return data ? JSON.parse(data) : false;
};

const getTempToken = () => {
  const data = storage.getString(StName.tempToken);
  console.log(data, 'getTempToken');

  return data ? JSON.parse(data) : false;
};

export const storageHelper = {
  getToken,

  getTempToken,
};
