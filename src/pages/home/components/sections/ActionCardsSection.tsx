import { Grid } from "@mui/material";
import React from "react";
import {
  ScanActionCard,
  SearchItemActionCard,
  CustomerActionCard,
  CartActionCard,
} from "../action-cards";

const ActionCardsSection = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={3} sm={6} xs={12}>
        <ScanActionCard />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <SearchItemActionCard />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <CustomerActionCard />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <CartActionCard />
      </Grid>
    </Grid>
  );
};

export default ActionCardsSection;
