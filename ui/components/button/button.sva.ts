import { sva } from "styled-system/css";

export const buttonSva = sva({
  slots: ["root", "icon"],
  base: {
    root: {
      width: "100%",
      border: "none",
      cursor: "pointer",
      borderRadius: "sm",
      alignItems: "center",
      whiteSpace: "nowrap",
      fontWeight: "medium",
      display: "inline-flex",
      justifyContent: "center",
    },
    icon: {
      display: "flex",
      marginRight: 2,
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          px: 7,
          py: 2,
          fontSize: "xs",
        },
        icon: {
          width: 4,
        },
      },
      md: {
        root: {
          px: 8,
          h: "46px",
          fontSize: "sm",
        },
        icon: {
          width: 5,
        },
      },
      lg: {
        root: {
          px: 12,
          py: 4,
        },
        icon: {
          width: 6,
        },
      },
    },
    variant: {
      solid: {
        root: {
          color: "white",
          fontWeight: "medium",
          background: "linear-gradient(#3F3FFE, #5299F1)",
          _hover: {
            background: "linear-gradient(#1414FB, #2788FF)",
          },
          _focus: {
            outline: "2px solid rgb(10, 13, 39)",
          },
        },
      },
      ghost: {
        root: {
          color: "db_black",
          backgroundColor: "transparent",
          _hover: {
            backgroundColor: "stone.100",
          },
          _focus: {
            outline: "2px solid rgb(10, 13, 39)",
          },
        },
      },
      oauth: {
        root: {
          color: "text_main",
          border: "1px solid",
          borderColor: "borders",
          backgroundColor: "medium_background",
          _hover: {
            backgroundColor: "medium_bg_hover",
          },
          _focus: {
            outline: "2px solid rgb(10, 13, 39)",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
