import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "#fff",
        border: "1px solid #fff",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        "&:hover": {
          backgroundColor: "#fff",
        },
        "&$focused": {
          backgroundColor: "#fff",
        },
      },
      underline: {
        "&:before": {
          // borderBottomColor: "red"
        },
        "&:hover:not(.Mui-focused):before": {
          // borderBottomColor: "green"
        },
        "&:after": {
          // focused
          // borderBottomColor: "purple"
        },
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
      },
    },
    MuiIconButton: {
      root: {
        color: '#fff'
      }
    },
    MuiPickerDTToolbar: {
      toolbar: {
        paddingLeft: "16px !important",
        paddingRight: "16px !important",
      },
    },
    MuiSelect: {
      icon: {
        color: "#fff",
      },
    },
    MuiInputBase: {
      root: {
        height: "40px",
        // padding:'7px 8px',
        color: "#f5f5f5",
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(7px, 13px) scale(1)",
        fontSize: "14px",
      },
      filled: {
        color: "#fff",
        "&$focused": {
          color: "#fff",
        },
        ".MuiFormControl-root:hover &:not($focused)": {
          color: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        fontSize: "14px",
      },
      multiline: {
        height: "auto",
      },
    },
    MuiDropzoneArea: {
      root: {
        height: "175px",
        minHeight: "175px",
        marginBottom: "15px",
        borderColor: "rgba(232 232 232 / 12%)",

        backgroundColor: "#000",
      },
    },
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
        fontWeight: 400,
        fontSize: "16px",
        padding: "2px 25px",
        margin: "10px 0 15px",
      },
      barColorPrimary: {
        backgroundColor: "#1ed760",
      },
      colorPrimary: {
        backgroundColor: "#efefef",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        backgroundColor: "#222",
      },
    },
    MuiButton: {
      root: {
        fontSize: "15px",
        borderRadius: 5,
        fontWeight: "400",
        "@media (max-width: 600px)": {
          height: "35px",
          fontSize: "16px",
          borderRadius: 3,
        },
      },
      // textPrimary:{
      //   color:"#000",
      // },
      containedPrimary: {
        boxShadow: "none",

        backgroundColor: "#da1d1d",
        "&:hover": {
          boxShadow: "none",
          color: "#da1d1d",
          backgroundColor: "#fff",
        },
      },
      containedSecondary: {
        boxShadow: "none",
        padding: "10px 10px",
        fontSize: "15px",
        color: "#fff",
        minWidth: "110px",
        background: "#1ed760",
        "&:hover": {
          boxShadow: "none",
          color: "#fff",
          backgroundColor: "#1ed760",
        },
        "@media (max-width: 600px)": {
          padding: "5px 5px",
          fontSize: "16px",
        },
      },
      containedSizeLarge: {
        color: "#fff",
        fontSize: "16px",
        // padding: "10px 59px",
        background: "#1ed760",
        "@media (max-width: 600px)": {
          padding: "5px 25px",
          fontSize: "16px",
        },
      },
      containedSizeSmall: {
        // marginTop: "1rem",

        "@media(max-width: 899px)": {
          marginLeft: "10px",
          marginTop: "1rem",
        },
      },
      outlined: {
        boxShadow: "none",
        borderWidth: 2,
      },
      outlinedPrimary: {
        borderRadius: 5,
        color: colors.common.white,
        borderColor: colors.common.white,
        boxShadow: "none",
        fontSize: "20px",
        padding: "10px 59px",
        "&:hover": {
          color: colors.primary,
        },
      },
      outlinedSizeLarge: {
        color: colors.common.white,
        borderColor: colors.common.white,
        borderWidth: 1,

        fontSize: "16px",

        "@media (max-width: 600px)": {
          padding: "5px 25px",
          fontSize: "16px",
        },
      },
    },
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: "#f5f5f5",
        fontWeight: "600",
      },
    },
    MuiMenuItem: {
      root: {
        color: "#757373",
      },
    },
    MuiPaper: {
      root: {
        color: "#fff",
      },
      outlined: {
        backgroundColor: "#121212",
        padding: "10px",
        borderRadius: "0",
        border: "0",
      },
    },
    MuiLink: {
      underlineHover: {
        "&:hover": {
          textDecoration: "none",
        },
      },
    },

    MuiSwitch: {
      colorSecondary: {
        "& .Mui-disabled": {
          color: "#1ed760 !important",
        },
      },
    },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "'Work Sans', sans-serif",
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#FBFBFD",
      dark: "#f3f7f9",
      paper: colors.common.white,
    },
    primary: {
      main: "#858585",
      dark: "#de0d0d",
      light: "#de0d0d",
    },
    secondary: {
      main: "#1ed760",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },
    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },
    error: {
      main: "#ff7d68",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },
    text: {
      primary: "#52565c",
      secondary: "#999999",
    },
    common: {
      black: "#222222",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
