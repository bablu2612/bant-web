import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import SideBar from "components/SideBar/SideBar";
import Header from "./Header";
import Footer from "./Footer";

export interface props {
    children?: React.ReactNode;
}
const LayoutWithLogin = ({ children }: props) => {
    const router = useRouter();
    const [isactive, setIsActive] = useState(false);

    useEffect(() => {
        console.log("router", router.pathname === "/login");
    }, []);

    return (
        <Box className={`main_components ${isactive ? "active" : "not-active"}`}>
            <Header setIsActive={setIsActive} />
            <SideBar />
            {children}
            <Footer />

        </Box>
    );
};

export default LayoutWithLogin;