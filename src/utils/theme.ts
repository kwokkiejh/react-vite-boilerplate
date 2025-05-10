import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import individually to reduce payload size
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import {
  COLOR_WHITE,
  COLOR_PRIMARY_MAIN,
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_BLACKER,
  COLOR_PRIMARY_LIGHT,
  CONTRAST_BACKGROUND,
  COLOR_ERROR_MAIN,
} from "./styling";

// Typescript declaration: https://mui.com/material-ui/customization/palette/?srsltid=AfmBOorRz5QESc228qDrQ7K6wwsd7OVtV0su600CDek1tLa4JfKGiBwN#typescript-2
declare module "@mui/material/styles" {
  interface PaletteColor {
    highlight?: string;
    background?: string;
    black?: string;
    blacker?: string;
    disabled?: string;
  }
  interface SimplePaletteColorOptions {
    highlight?: string;
    background?: string;
    black?: string;
    blacker?: string;
    disabled?: string;
  }

  interface TypographyVariants {
    bodyL: React.CSSProperties;
    bodyM: React.CSSProperties;
    bodyS: React.CSSProperties;
    bodyXS: React.CSSProperties;
    bodyXXS: React.CSSProperties;
    buttonL: React.CSSProperties;
    buttonM: React.CSSProperties;
    buttonS: React.CSSProperties;
    paperTitle: React.CSSProperties;
    paperSubtitle: React.CSSProperties;
    paperLabel: React.CSSProperties;
    paperDescription: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    bodyL: React.CSSProperties;
    bodyM: React.CSSProperties;
    bodyS: React.CSSProperties;
    bodyXS: React.CSSProperties;
    bodyXXS: React.CSSProperties;
    buttonL: React.CSSProperties;
    buttonM: React.CSSProperties;
    buttonS: React.CSSProperties;
    paperTitle: React.CSSProperties;
    paperSubtitle: React.CSSProperties;
    paperLabel: React.CSSProperties;
    paperDescription: React.CSSProperties;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyL: true;
    bodyM: true;
    bodyS: true;
    bodyXS: true;
    bodyXXS: true;
    buttonL: true;
    buttonM: true;
    buttonS: true;
    paperTitle: true;
    paperSubtitle: true;
    paperLabel: true;
    paperDescription: true;
  }
}
let theme = createTheme({
  palette: {
    primary: {
      light: COLOR_PRIMARY_LIGHT,
      main: COLOR_PRIMARY_MAIN,
      blacker: COLOR_PRIMARY_BLACKER,
      black: COLOR_PRIMARY_BLACK,
      contrastText: COLOR_WHITE,
      disabled: "#ca4646",
    },
    secondary: {
      main: "#c0b498",
      highlight: "#b498C0",
      background: CONTRAST_BACKGROUND,
    },
    error: {
      main: COLOR_ERROR_MAIN,
    },
  },
});
theme = createTheme(theme, {
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Open Sans", // https://github.com/mui/material-ui/issues/28633: In v5 however, you have to explicitly set it for every component that has text
        variantMapping: {
          paperTitle: "div",
          paperLabel: "div",
          paperSubtitle: "div",
        },
      },
      styleOverrides: {
        h1: {
          fontSize: 42,
          fontWeight: 700,
          lineHeight: 1.1,
          fontFamily: `"Roboto"`,
          color: theme.palette.primary.blacker,
        },
        h2: {
          fontSize: 32,
          fontWeight: 700,
          lineHeight: 1.1,
          fontFamily: "Roboto",
          color: theme.palette.primary.blacker,
        },
        h3: {
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 1.1,
          fontFamily: "Roboto",
          color: theme.palette.primary.black,
        },
        h4: {
          fontSize: 20,
          fontWeight: 700,
          lineHeight: 1.1,
          fontFamily: `"Roboto"`,
          color: theme.palette.primary.black,
        },
        h5: {
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1.1,
          fontFamily: "Roboto",
          color: theme.palette.primary.black,
        },
        subtitle1: {
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 1.1,
          color: theme.palette.primary.black,
        },
        subtitle2: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.1,
          color: theme.palette.primary.black,
        },
        bodyL: {
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.4,
          color: theme.palette.primary.black,
        },
        bodyM: {
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.4,
          color: theme.palette.primary.black,
        },
        bodyS: {
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.4,
          color: theme.palette.primary.black,
        },
        bodyXS: {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 1.4,
          color: theme.palette.primary.black,
        },
        buttonL: {
          fontSize: 20,
          fontWeight: 500,
          lineHeight: 1.0,
          fontFamily: "Roboto",
          letterSpacing: "0.5px",
          color: theme.palette.primary.black,
        },
        buttonM: {
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 1.0,
          fontFamily: "Roboto",
          letterSpacing: "0.5px",
          color: theme.palette.primary.black,
        },
        buttonS: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.0,
          fontFamily: "Roboto",
          letterSpacing: "0.5px",
          color: theme.palette.primary.black,
        },
        buttonMenuTab: {
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 1.0,
          fontFamily: "Roboto",
          color: theme.palette.primary.black,
        },
        paperTitle: {
          fontSize: 24,
          fontWeight: 600,
          lineHeight: 1.2,
          color: "#1e1e1e",
        },
        paperSubtitle: {
          fontSize: 20,
          fontWeight: 400,
          lineHeight: 1.2,
          color: "#757575",
        },
        paperLabel: {
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.4,
          color: "#1e1e1e",
        },
        paperDescription: {
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 1.4,
          color: "#757575",
        },
      },
    },
  },
  // typography: {
  //   h1: {
  //     fontSize: 42,
  //     fontWeight: 700,
  //     lineHeight: 1.1,
  //     fontFamily: `"Roboto"`,
  //     color: theme.palette.primary.blacker,
  //   },
  //   h2: {
  //     fontSize: 32,
  //     fontWeight: 700,
  //     lineHeight: 1.1,
  //     fontFamily: "Roboto",
  //     color: theme.palette.primary.blacker,
  //   },
  //   h3: {
  //     fontSize: 24,
  //     fontWeight: 700,
  //     lineHeight: 1.1,
  //     fontFamily: "Roboto",
  //     color: theme.palette.primary.black,
  //   },
  //   h4: {
  //     fontSize: 20,
  //     fontWeight: 700,
  //     lineHeight: 1.1,
  //     fontFamily: `"Roboto"`,
  //     color: theme.palette.primary.black,
  //   },
  //   h5: {
  //     fontSize: 18,
  //     fontWeight: 700,
  //     lineHeight: 1.1,
  //     fontFamily: "Roboto",
  //     color: theme.palette.primary.black,
  //   },
  //   subtitle1: {
  //     fontSize: 16,
  //     fontWeight: 500,
  //     lineHeight: 1.1,
  //     color: theme.palette.primary.black,
  //   },
  //   subtitle2: {
  //     fontSize: 14,
  //     fontWeight: 500,
  //     lineHeight: 1.1,
  //     color: theme.palette.primary.black,
  //   },
  //   bodyL: {
  //     fontSize: 18,
  //     fontWeight: 400,
  //     lineHeight: 1.4,
  //     color: theme.palette.primary.black,
  //   },
  //   bodyM: {
  //     fontSize: 16,
  //     fontWeight: 400,
  //     lineHeight: 1.4,
  //     color: theme.palette.primary.black,
  //   },
  //   bodyS: {
  //     fontSize: 14,
  //     fontWeight: 400,
  //     lineHeight: 1.4,
  //     color: theme.palette.primary.black,
  //   },
  //   bodyXS: {
  //     fontSize: 12,
  //     fontWeight: 400,
  //     lineHeight: 1.4,
  //     color: theme.palette.primary.black,
  //   },
  //   buttonL: {
  //     fontSize: 20,
  //     fontWeight: 500,
  //     lineHeight: 1.0,
  //     fontFamily: "Roboto",
  //     letterSpacing: "0.5px",
  //     color: theme.palette.primary.black,
  //   },
  //   buttonM: {
  //     fontSize: 16,
  //     fontWeight: 500,
  //     lineHeight: 1.0,
  //     fontFamily: "Roboto",
  //     letterSpacing: "0.5px",
  //     color: theme.palette.primary.black,
  //   },
  //   buttonS: {
  //     fontSize: 14,
  //     fontWeight: 500,
  //     lineHeight: 1.0,
  //     fontFamily: "Roboto",
  //     letterSpacing: "0.5px",
  //     color: theme.palette.primary.black,
  //   },
  //   buttonMenuTab: {
  //     fontSize: 16,
  //     fontWeight: 500,
  //     lineHeight: 1.0,
  //     fontFamily: "Roboto",
  //     color: theme.palette.primary.black,
  //   },
  //   paperTitle: {
  //     fontSize: 24,
  //     fontWeight: 600,
  //     lineHeight: 1.2,
  //     color: "#1e1e1e",
  //   },
  //   paperSubtitle: {
  //     fontSize: 20,
  //     fontWeight: 400,
  //     lineHeight: 1.2,
  //     color: "#757575",
  //   },
  //   paperLabel: {
  //     fontSize: 16,
  //     fontWeight: 400,
  //     lineHeight: 1.4,
  //     color: "#1e1e1e",
  //   },
  //   paperDescription: {
  //     fontSize: 16,
  //     fontWeight: 400,
  //     lineHeight: 1.4,
  //     color: "#757575",
  //   },
  // },
});

theme = responsiveFontSizes(theme);

export default theme;
