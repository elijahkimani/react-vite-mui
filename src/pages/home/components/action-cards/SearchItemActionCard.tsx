import React from "react";
import BaseActionCard from "./BaseActionCard";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";

const SearchItemActionCard = () => {
  return (
    <BaseActionCard
      title="Search"
      icon={AccountCircleRounded}
      description="Search term or item number"
    ></BaseActionCard>
  );
};

export default SearchItemActionCard;
