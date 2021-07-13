// stitches.config.ts
import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        lightGrey: "#545C79",
        grey: "#aab2cd",
        darkGrey: "#252d4b",
        darkGrey2: "#1f2641",
        green: "linear-gradient(100.94deg, #16B04B 22.46%, #39B54A 131.92%)",
        green2: "#00B871",
        pink: "linear-gradient(296.38deg, #FF9A9E 11.14%, #DDA9AB 89.59%)",
        orange: "linear-gradient(90deg, #FFC062 0%, #FF9F0E 100%)",
        purple: "linear-gradient(90deg, #D150FF 0%, #BD00FF 100%)",
        lightBlue: "linear-gradient(90deg, #73DDFF 0%, #00C2FF 100%)",
        brightRed: "#FF0000",
      },
      fonts: {
        default: "Titillium Web, sans-serif",
      },
      fontSizes: {
        small: "12px",
        normal: "16px",
        medium: "18px",
        xMedium: "25px",
        large: "40px",
        xLarge: "45px",
      },
      fontWeights: {
        normal: 300,
        semiBold: 700,
        bold: 700,
      },
      letterSpacings: {
        normal: "0em",
      },
    },
    media: {
      xs: "(min-width: 320px)",
      sm: "(min-width: 480px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
    },
    prefix: "st__",
  });
