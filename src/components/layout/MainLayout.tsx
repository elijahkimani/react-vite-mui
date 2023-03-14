import { styled } from "@mui/material";
import React from "react";
import LayoutAppBar from "./LayoutAppBar";

const StyledWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  "& main": {
    marginTop: 64,
    height: "100%",
  },
}));

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <StyledWrapper>
      <LayoutAppBar></LayoutAppBar>
      <main>{children}</main>
    </StyledWrapper>
  );
};

export default MainLayout;
