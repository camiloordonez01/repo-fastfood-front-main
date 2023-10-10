import { HTTP_UNEXPECTED_ERROR } from '../messages';

import { signIn } from 'services/users';
const useSignIn = () => {
    const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
            const result = await signIn(values);

            if (result.status === 200) {
                const {
                    data: { result: ResultData }
                } = result;

                localStorage.setItem('accessToken', ResultData.AccessToken);
                localStorage.setItem('refreshToken', ResultData.RefreshToken);
                localStorage.setItem('expirationDate', ResultData.Expiration);
                localStorage.setItem('uidUser', ResultData.UidUser);

                if (ResultData.Relations.length > 0) {
                    localStorage.setItem('relations', JSON.stringify(ResultData.Relations));
                }

                setStatus({ success: false });
                setSubmitting(true);
            }
        } catch (err) {
            if (err.response.data.message) {
                setStatus({ success: true });
                setSubmitting(false);
                setErrors({ password: err.response.data.message });
            } else {
                setStatus({ success: true });
                setSubmitting(false);
                setErrors({ password: HTTP_UNEXPECTED_ERROR });
            }
        }
    };
    const initialValues = {
        email: '',
        password: ''
    };
    return {
        handleSubmit,
        initialValues
    };
};

export default useSignIn;
