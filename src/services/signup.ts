import apiInstance from './config';

type SignUpBody = {
    email: string;
    password: string;
};
export const signUp = (data: SignUpBody) => apiInstance.post('/signUp', data);

type PhoneBody = {
    number: string;
};
export const setPhoneNumber = (data: PhoneBody) => apiInstance.post('/phoneNumber', data);

type VerifyBody = {
    token: string;
};
export const verifyNumber = (data: VerifyBody) => apiInstance.post('/phoneNumber/verify', data);

type ProfileBody = {
    name: string;
    secondName: string;
    firstLastName: string;
    secondLastName: string;
};
export const setProfile = (data: ProfileBody) => apiInstance.post('/profile/name', data);