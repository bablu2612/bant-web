import ILoginProps, { LoginCredential } from '@/PagesComponents/Login/Login.interface';
import React from 'react';

const useLoginHook = (props: ILoginProps) => {

    const { router } = props;

    function _handleLogin(values: LoginCredential) {
        const { email, password } = values;
        if (email !== "" && password !== "") {
            localStorage.setItem('Login', 'true');
            router.push('/dashboard');
        }
    }

    return [
        _handleLogin
    ] as const;
}

export default useLoginHook;