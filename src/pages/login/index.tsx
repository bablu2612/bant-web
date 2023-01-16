import withoutAuth from "@/Auth/withoutAuth";
import ILoginProps from "@/PagesComponents/Login/Login.interface";
import useLoginHook from "@/hooks/login.hook";
import LoginComponent from "@/PagesComponents/Login";

const Login = (props: ILoginProps) => {
  const [
    _handleLogin,
  ] = useLoginHook(props);

  return (
    <LoginComponent {...{ _handleLogin }} />
  );
}

export default withoutAuth(Login, '/dashboard')
