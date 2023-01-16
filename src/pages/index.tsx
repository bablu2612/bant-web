import withAuth from "@/Auth/withAuth"
import React from "react";
import DashboardPageComponent from "@/PagesComponents/Dashboard";

const Home = () => {
  return (<DashboardPageComponent />);
}

export default withAuth(Home)



