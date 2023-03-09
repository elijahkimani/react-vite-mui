import React from "react";
import BaseActionCard from "./BaseActionCard";
import SearchRounded from "@mui/icons-material/SearchRounded";

const CustomerActionCard = () => {
  return (
    <BaseActionCard
      title="Customer"
      icon={SearchRounded}
      description="Search and edit customer data"
    ></BaseActionCard>
  );
};

export default CustomerActionCard;
