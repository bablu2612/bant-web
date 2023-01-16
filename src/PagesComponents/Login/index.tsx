import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import loginConstents, { LoginValidationSchema } from "./Login.constents";
import { Loginstyles } from "./Login.style";
import { ILoginComponentProps, LoginCredential } from "./Login.interface";
import { Form, Formik, ErrorMessage, FormikHelpers } from "formik";

const { emailText, passwordText, signIntoText, welcomeText, loginButtonText } = loginConstents;

const LoginComponent = (props: ILoginComponentProps) => {

    const INITIAL_VALUE: LoginCredential = { email: "", password: "" };

    return (
        <Loginstyles>
            <Formik
                initialValues={INITIAL_VALUE}
                onSubmit={(values: LoginCredential, actions: FormikHelpers<LoginCredential>) => {
                    props?._handleLogin(values)
                }}
                validationSchema={LoginValidationSchema}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => (
                    <Form className="form">
                        <img src="Images/Logoold.png" />
                        <h1>{welcomeText}</h1>
                        <h3>{signIntoText}</h3>
                        <TextField
                            label={emailText}
                            name="email"
                            variant="filled"
                            value={values?.email}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            onBlur={handleBlur}
                            onChange={handleChange} />
                        {/* <ErrorMessage component="p" name="email" /> */}
                        <TextField label={passwordText}
                            variant="filled"
                            name="password"
                            value={values?.password}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <Button variant="contained" type="submit">{loginButtonText}</Button>
                    </Form>
                )}
            </Formik>
        </Loginstyles >
    );
}

export default LoginComponent;
