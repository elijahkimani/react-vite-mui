import { styled } from "@mui/material";
import React from "react";
import LayoutAppBar from "./LayoutAppBar";

const StyledWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  "& main": {
    marginTop: 64,
    minHeight: "calc(100vh - 64px)",
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
