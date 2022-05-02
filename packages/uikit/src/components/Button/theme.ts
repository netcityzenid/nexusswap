import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "transparent",
    color: "#FF1F26",
    border: "1px solid",
    borderColor: "#FF1F26",
    borderRadius: "5px",
    
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "#FF1F26",
    boxShadow: "none",
    color: "#FF1F26",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "white",
  },
  [variants.SUBTLE]: {
    backgroundColor: "#ffae36",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "#ffae36",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "#ffffff",
    color: "white",
    boxShadow: "none",
  },
};
