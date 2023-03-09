/**
 * In primary, secondary, info, success, warning and error color set
 * Colors '600 === main' and '800 === dark' as well
 * MUI needs to know the main and dark
 * But to avoid any confusion we also kept 600 & 800 as it is used in Figma
 */

const grey300 = "#D9DEE7";
const grey500 = "#8C95A6";
const grey600 = "#66758F";
const grey700 = "#19212E";
const white = "#fff";

export const palette = {
  common: {
    black: "#000",
    white,
  },
  primary: {
    100: "#fcf7fe",
    200: "#E5CACC",
    300: "#D0A5A8",
    400: "#BB8186",
    500: "#bc8583",
    600: "#8C3C45",
    main: "#731c26",
    700: "#571D24",
    800: "#3E1B1F",
    dark: "#291719",
  },
  info: {
    100: "#EAE6FF",
    200: "#C9C1F5",
    300: "#AEA2F1",
    400: "#8272DF",
    500: "#5D48D5",
    600: "#422CC1",
    main: "#422CC1",
    700: "#332296",
    800: "#2A1C7D",
    dark: "#2A1C7D",
  },
  success: {
    100: "#E3FCF4",
    200: "#ABF5DC",
    300: "#79F2CA",
    400: "#65DCB4",
    500: "#36B389",
    600: "#008559",
    main: "#008559",
    700: "#006644",
    800: "#005236",
    dark: "#005236",
  },
  warning: {
    100: "#FFF7E6",
    200: "#FFF0B3",
    300: "#FFE380",
    400: "#FFC400",
    500: "#FFAB00",
    600: "#FF7E1D",
    main: "#FF7E1D",
    700: "#F06700",
    800: "#CC5800",
    dark: "#CC5800",
  },
  error: {
    100: "#FFEBE6",
    200: "#FFBDAD",
    300: "#FF8F73",
    400: "#FF7C5C",
    500: "#F6491E",
    600: "#DC3309",
    main: "#DC3309",
    700: "#BA2B08",
    800: "#9D2507",
    dark: "#9D2507",
  },
  grey: {
    100: "#F3F4F6",
    200: "#E7EAEE",
    300: grey300,
    400: "#C3C9D5",
    500: grey500,
    600: grey600,
    700: grey700,
  },
  background: {
    default: white,
    paper: white,
  },
  text: {
    primary: "#291719",
  },
  divider: "#E5CACC",
};
