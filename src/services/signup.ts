import apiInstance from './config';

type SignUpBody = {
    email: string;
    password: string;
}

export const signUp = (data: SignUpBody) => apiInstance.post('/signUp', data);