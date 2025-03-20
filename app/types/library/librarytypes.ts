import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthLibrary {
  token: string;
}

interface Item {
  [key: string]: any;
}

export type {PayloadAction};

export interface UserProfile {
  [key: string]: any;
}

export interface HelperSlice {
  startedProvision: any;
  provisionModal: any;
}
