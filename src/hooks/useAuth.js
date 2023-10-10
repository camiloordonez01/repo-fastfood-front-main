import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { signIn } from 'services/users';

const UserContext = createContext();

export const UserProvider = () => {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies();

    const login = async (values) => {
        const result = await signIn(values);

        const {
            data: { result: ResultData }
        } = result;

        setCookies('accessToken', ResultData.AccessToken);
        setCookies('refreshToken', ResultData.RefreshToken);
        setCookies('expirationDate', ResultData.Expiration);
        setCookies('uidUser', ResultData.UidUser);

        if (ResultData.Relations.length > 0) {
            setCookies('relations', JSON.stringify(ResultData.Relations));
        }

        navigate('/dashboard');
    };

    const logout = () => {
        ['accessToken', 'refreshToken', 'expirationDate', 'uidUser', 'relations'].forEach((obj) => removeCookie(obj));
        navigate('/login');
    };

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout
        }),
        [cookies]
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
    return useContext(UserContext);
};
