import * as React from "react";
import { CircleNotifications, AccountCircle } from "@mui/icons-material";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { Headerstyles } from "./Header.styles";
import { Router, useRouter } from "next/router";

export default function Header({ setIsActive }: any) {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Headerstyles>
            <header id="header">
                <Box className="container-fluid">
                    <Box className="row">
                        <Box className="col-md-4 col-lg-3 col-xl-2">
                            <Box className="logo-sec">
                                <a className="logo animated fadeIn" href="#">
                                    <img src="./Images/Logoold.png" />
                                </a>
                                <a
                                    className="app-sidebar__toggle"
                                    href="#"
                                    data-toggle="sidebar"
                                    aria-label="Hide Sidebar"
                                    onClick={() => setIsActive((prev: any) => !prev)}
                                >
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 72 55.2"
                                    >
                                        <rect y="0.6" width="72" height="10"></rect>
                                        <rect y="24.6" width="72" height="10"></rect>
                                        <rect y="48.6" width="72" height="10"></rect>
                                    </svg>
                                </a>
                            </Box>
                        </Box>

                        <Box className="col-md-8 col-lg-9 col-xl-10">
                            <Box className="row">
                                <Box className="col-md-8">
                                    <form role="search" className="form-search">
                                        <Box className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Search for lead"
                                                name="srch-term"
                                                id="ed-srch-term"
                                                type="text"
                                            />
                                            <Box className="input-group-btn">
                                                <button type="submit" id="searchbtn">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </Box>
                                        </Box>
                                    </form>
                                </Box>

                                <Box className="col-md-4">
                                    <Box className="header_actions h-100">
                                        <Box className="icons">
                                            <a href="#">
                                                <CircleNotifications />
                                            </a>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? "basic-menu" : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? "true" : undefined}
                                                onClick={handleClick}
                                            >
                                                <AccountCircle />
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    "aria-labelledby": "basic-button",
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <MenuItem onClick={() => {
                                                    handleClose();
                                                    localStorage.removeItem('Login');
                                                    router.push('/login');
                                                }}>Logout</MenuItem>
                                            </Menu>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </header>
        </Headerstyles>
    );
}
