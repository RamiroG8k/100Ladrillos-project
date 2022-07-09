const baseUrl = 'https://frontend-recruiting.100ladrillos.com/api';
// const token = (typeof window !== 'undefined') && localStorage.getItem('brick-token');
const proxy = 'https://cors-anywhere.herokuapp.com/';

async function getMethod(endpoint: string, settings = {}) {
    const url = `${baseUrl}${endpoint}`;
    const token = (typeof window !== 'undefined') && localStorage.getItem('brick-token');

    const response = await fetch(url, {
        headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        method: 'GET',
        ...settings,
    });

    return response.json();
}

async function postMethod(endpoint: string, data?: any, settings = {}) {
    const url = `${proxy}${baseUrl}${endpoint}`;
    const token = (typeof window !== 'undefined') && localStorage.getItem('brick-token');

    const response = await fetch(url, {
        headers: new Headers({
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
            'origin': 'x-requested-with',
        }),
        mode: 'cors',
        method: 'POST',
        ...settings,
        body: JSON.stringify(data),
    });
    
    return response.json();
}

const apiInstance = {
    get: getMethod,
    post: postMethod,
}

export default apiInstance;