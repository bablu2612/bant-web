import * as yup from 'yup';

const loginConstents = {
    welcomeText: "Welcome!",
    signIntoText: "Sign Into Your Account",
    loginButtonText: "Login",
    emailText: "Email",
    passwordText: "Password"
};

export const LoginValidationSchema = yup.object().shape({
    email: yup.string().trim()
        .required("This field is required")
        .email('Please enter valid email'),
    password: yup.string().trim()
        .required("This field is required")
});

export default loginConstents;
