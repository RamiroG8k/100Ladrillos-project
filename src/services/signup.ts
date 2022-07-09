import apiInstance from './config';
import { SignUpBody, PhoneBody, VerifyBody, ProfileBody } from '@types';

export const signUp = (data: SignUpBody) => apiInstance.post('/signUp', data);

export const setPhoneNumber = (data: PhoneBody) => apiInstance.post('/phoneNumber', data);

export const verifyNumber = (data: VerifyBody) => apiInstance.post('/phoneNumber/verify', data);

export const setProfile = (data: ProfileBody) => apiInstance.post('/profile/name', data);

export const getProfile = () => apiInstance.get('/profile');