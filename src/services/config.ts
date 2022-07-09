const baseUrl = 'https://frontend-recruiting.100ladrillos.com/api';
// const token = (typeof window !== 'undefined') && localStorage.getItem('brick-token');
const proxy = 'https://cors-anywhere.herokuapp.com/';

import axios from 'axios';

const apiInstance = axios.create({
    baseURL: `${proxy}${baseUrl}`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'origin': 'x-requested-with',
        'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    }
});

apiInstance.interceptors.request.use((req: any) => {
    req.headers.Authorization = `bearer ${localStorage.getItem('brick-token')}`;
    return req;
});

apiInstance.interceptors.response.use(res => {
    return res;
}, async (error: any) => {
    return Promise.reject(error);
})

export default apiInstance;

// async function postMethod(endpoint: string, data?: any, settings = {}) {
//     const url = `${proxy}${baseUrl}${endpoint}`;
//     const token = (typeof window !== 'undefined') && localStorage.getItem('brick-token');

//     const response = await fetch(url, {
//         headers: new Headers({
//             'Accept': '*/*',
//             'Authorization': `Bearer ${token}`,
//             'Content-type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
//             'origin': 'x-requested-with',
//         }),
//         mode: 'cors',
//         method: 'POST',
//         ...settings,
//         body: JSON.stringify(data),
//     });

//     return response.json();
// }
