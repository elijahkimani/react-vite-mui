import React from "react";
import BaseActionCard from "./BaseActionCard";
import LocalMallRounded from "@mui/icons-material/LocalMallRounded";

const CartActionCard = () => {
  return (
    <BaseActionCard
      title="Cart"
      icon={LocalMallRounded}
      description="View and edit shopping cart"
    ></BaseActionCard>
  );
};

export default CartActionCard;
