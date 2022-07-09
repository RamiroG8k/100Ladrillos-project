async function postMethod(endpoint: string, data?: any, settings = {}) {
    const baseUrl = 'https://frontend-recruiting.100ladrillos.com/api';
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, {
        headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${localStorage.getItem('brick-token')}`,
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        method: 'POST',
        ...settings,
        body: JSON.stringify(data)
    });
    
    return response.json();
}

const apiInstance = {
    post: postMethod,
}

export default apiInstance;