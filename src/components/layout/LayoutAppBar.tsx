import { palette } from "@/styles/palette";
import {
  AppBar,
  Toolbar,
  styled,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";
import LocalMallRounded from "@mui/icons-material/LocalMallRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import QrCodeScannerRounded from "@mui/icons-material/QrCodeScannerRounded";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: palette.primary[100],
  color: theme.palette.text.primary,
  boxShadow: "unset",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const LayoutAppBar = () => {
  return (
    <StyledAppBar>
      <Toolbar sx={{ mx: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton edge="start" color="inherit">
              <MenuRounded fontSize="large" />
            </IconButton>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccountCircleRounded fontSize="large" />
              <Typography variant="subtitle1">
                <b>Search Customer</b>
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={1}>
            <IconButton edge="start" color="inherit">
              <QrCodeScannerRounded fontSize="large" />
            </IconButton>
            <IconButton edge="start" color="inherit">
              <SearchRounded fontSize="large" />
            </IconButton>
            <IconButton edge="start" color="inherit">
              <LocalMallRounded fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default LayoutAppBar;
