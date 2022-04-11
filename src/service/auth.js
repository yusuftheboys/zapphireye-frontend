import axios from '../api/axios';

export const register = async (username, password, role) => {
    try {
        const response = await axios.post(
            '/subs',
            JSON.stringify({username, password, role})
        );
        console.log(response);
        console.log(response?.data);
        return true;
    } catch (err) {
        console.log(err)
        return false;
    }
}

export const login = async (username, password) => {
    try {
        const response = await axios.post(
            '/auth',
            JSON.stringify({username, password}),
        );
        console.log(response?.data);
        console.log(response?.data?.response);
        let token = response.data.response;
        let role = response.data.role;
        localStorage.setItem("Token", 'Bearer ' + token);
        localStorage.setItem("Role", role);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        console.log(axios.defaults.headers)
        return {status: true, token, role};
    } catch (err) {
        console.log(err)
        return {status: false};
    }
}

export const logout = async () => {
    delete axios.defaults.headers.common['Authorization']
    localStorage.clear();
}
