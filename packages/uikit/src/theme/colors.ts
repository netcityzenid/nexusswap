import { Colors } from "./types";

export const baseColors = {
  failure: "#ff1f26",
  primary: "#ff1f26",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#191919",
  success: "#1fff93",
  warning: "#ff1f26",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#ffe3e3",
  background: "#292929", //bg dompet wallet
  backgroundDisabled: "#E9EAEB",
  backgroundAlt:  "#292929",
  backgroundAlt2: "#191919",
  cardBorder: "#ff1f26",
  contrast: "#191326",
  dropdown: "#ff1f26",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#ffffff",
  input: "#292929",
  inputSecondary: "#292929",
  tertiary: "#292929",
  text: "#ffe3e3",
  textDisabled: "#9e1014",
  textSubtle: "#ffe3e3",
  disabled: "#063a75",
  gradients: {
    bubblegum: "#191919",
    inverseBubblegum: "linear-gradient(139.73deg, #288CFF 0%, #288CFF 100%)",
    cardHeader: "#191919",
    blue: "#191919",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#ffe3e3",
  background: "#292929", //bg dompet wallet
  backgroundDisabled: "#E9EAEB",
  backgroundAlt:  "#191919",
  backgroundAlt2: "#191919",
  cardBorder: "#ff1f26",
  contrast: "#191326",
  dropdown: "#ff1f26",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#191919",
  input: "#292929",
  inputSecondary: "#292929",
  tertiary: "#292929",
  text: "#ffe3e3",
  textDisabled: "#9e1014",
  textSubtle: "#ffe3e3",
  disabled: "#063a75",
  gradients: {
    bubblegum: "#191919",
    inverseBubblegum: "linear-gradient(139.73deg, #288CFF 0%, #288CFF 100%)",
    cardHeader: "#191919",
    blue: "#191919",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
