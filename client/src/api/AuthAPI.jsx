import { useHttp } from '../hooks/http.hook';

export const AuthAPI = (userinfo) => {
    const { request } = useHttp();
    return request('/api/auth/register', 'POST', { ...userinfo });
}