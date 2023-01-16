import { NextRouter } from "next/router";
import * as React from 'react';

export default interface ILoginProps {
    router: NextRouter;
}

export interface LoginCredential {
    email: string;
    password: string;
}

export interface ILoginComponentProps {
    _handleLogin: (values: LoginCredential) => void;
    // onHandleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section: string) => void;
}