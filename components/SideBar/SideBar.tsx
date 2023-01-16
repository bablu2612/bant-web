import * as React from "react";
import { Box } from "@mui/material";
import { PersonAdd, Groups, FindInPage, Home } from "@mui/icons-material";
import Link from "next/link";
import { Sidebarstyles } from "./styles";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "Homepage",
      icon: <Home />,
    },
    {
      href: "/memberSearch",
      title: "Member Search",
      icon: <Groups />,
    },
    {
      href: "/applicationSearch",
      title: "Application Search",
      icon: <FindInPage />,
    },
    {
      href: "/createMember",
      title: "Create Member",
      icon: <PersonAdd />,
    },
  ];
  return (
    <Sidebarstyles>
      <Box id="sidebar" className="sidebar">
        <nav>
          <ul>
            {menuItems?.map((val, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    router.pathname === val.href ? "active" : "not-active"
                  }`}
                >
                  <Link href={val?.href}>
                    {val.icon} {val?.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Box>
    </Sidebarstyles>
  );
}
