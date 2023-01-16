
import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Box, CircularProgress } from "@mui/material";

const isBrowser = (): boolean => typeof window !== "undefined";

const DefaultLoadingFallback = (): ReactElement => (
  <Box
    style={{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
    }}
  >
    <CircularProgress />
  </Box>
);


const withAuthRedirect = function withAuthRedirect<CP, IP = CP>({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  location,
}: {
  WrappedComponent: React.FC<any>;
  LoadingComponent?: NextPage;
  expectedAuth: boolean;
  location: string;
}) {
  const WithAuthRedirectWrapper = () => {
    const router = useRouter();

    useEffect(() => {
      const isLogin = localStorage.getItem('Login') === "true" ? true : false;
      if (isBrowser() && expectedAuth !== isLogin) {
        router.push(location);
      }
    }, [])



    return (
      <>
        <WrappedComponent {...{ router }} />
      </>
    );
  };
  return WithAuthRedirectWrapper;
};

export default withAuthRedirect;
