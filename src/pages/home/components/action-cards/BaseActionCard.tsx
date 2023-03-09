import { palette } from "@/styles/palette";
import {
  SvgIconTypeMap,
  styled,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

const StyledWrapper = styled("div")(({ theme }) => ({
  backgroundColor: palette.primary[100],
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  height: "100%",
  cursor: "pointer",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[1],
  },
}));

const StyledIconWrapper = styled("div")(({ theme }) => ({
  backgroundColor: palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
}));

interface BaseActionCardProps {
  title: string;
  description: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const BaseActionCard = (props: BaseActionCardProps) => {
  const { title, description, icon: MuiIcon } = props;
  return (
    <StyledWrapper>
      <Stack direction="row" spacing={1} alignItems="center">
        <StyledIconWrapper>
          <MuiIcon fontSize="large" color="inherit" />
        </StyledIconWrapper>

        <div>
          <Typography variant="subtitle1" m={0} lineHeight={1}>
            <b>{title}</b>
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            {description}
          </Typography>
        </div>
      </Stack>
    </StyledWrapper>
  );
};

export default BaseActionCard;
