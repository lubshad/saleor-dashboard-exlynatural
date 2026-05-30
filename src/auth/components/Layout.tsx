import exlynaturalLogo from "@assets/images/exlynatural-logo.svg";
import exlynaturalLogoDark from "@assets/images/exlynatural-logo-dark.svg";
import exlynaturalMark from "@assets/images/exlynatural-mark.png";
import { makeStyles, useTheme } from "@saleor/macaw-ui";
import { type ReactNode } from "react";
import SVG from "react-inlinesvg";

import { useUser } from "../useUser";
import LoginLoading from "./LoginLoading";

const useStyles = makeStyles(
  theme => ({
    brandContent: {
      maxWidth: 560,
      position: "relative",
      width: "100%",
      zIndex: 1,
    },
    brandCopy: {
      color: "rgba(255, 255, 255, 0.76)",
      fontSize: 18,
      lineHeight: 1.65,
      margin: theme.spacing(3, 0, 0),
      maxWidth: 440,
    },
    brandEyebrow: {
      color: "#83C94F",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.12em",
      marginBottom: theme.spacing(3),
      textTransform: "uppercase",
    },
    brandHeading: {
      color: "#FFFFFF",
      fontSize: 46,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.08,
      margin: 0,
      maxWidth: 560,
      [theme.breakpoints.down("md")]: {
        fontSize: 38,
      },
    },
    brandLogo: {
      display: "block",
      height: 58,
    },
    brandLogoContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(8),
      width: "100%",
    },
    brandMark: {
      bottom: -56,
      height: 260,
      opacity: 0.12,
      position: "absolute",
      right: -42,
      width: 260,
    },
    formPanel: {
      "@media (max-width: 899px)": {
        margin: "0 auto",
        maxWidth: 420,
        padding: theme.spacing(4, 3, 5),
        width: "100%",
      },
      maxWidth: 420,
      width: "100%",
    },
    logo: {
      display: "block",
      height: 40,
    },
    logoContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(4),
      width: "100%",
    },
    mainPanel: {
      "@media (max-width: 899px)": {
        display: "block",
        minHeight: "auto",
        padding: 0,
      },
      background: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "100vh",
      padding: theme.spacing(6, 8),
      width: "100%",
    },
    mainPanelContent: {
      "@media (max-width: 899px)": {
        display: "block",
        flex: "none",
        margin: 0,
        width: "100%",
      },
      alignItems: "center",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      margin: "auto",
      width: "100%",
    },
    mobileBrand: {
      "@media (min-width: 900px)": {
        display: "none",
      },
      alignItems: "center",
      background: "linear-gradient(135deg, #174F30 0%, #287E45 62%, #3E9656 100%)",
      display: "flex",
      gap: theme.spacing(2),
      minHeight: 116,
      overflow: "hidden",
      padding: theme.spacing(3),
      position: "relative",
    },
    mobileBrandCopy: {
      color: "rgba(255, 255, 255, 0.78)",
      fontSize: 13,
      lineHeight: 1.4,
      marginTop: theme.spacing(0.75),
    },
    mobileBrandLogo: {
      display: "block",
      height: 34,
    },
    mobileBrandMark: {
      height: 118,
      opacity: 0.14,
      position: "absolute",
      right: -18,
      top: -10,
      width: 118,
    },
    root: {
      "@media (min-width: 900px)": {
        gridTemplateColumns: "minmax(420px, 48vw) minmax(420px, 1fr)",
      },
      display: "grid",
      gridTemplateColumns: "1fr",
      minHeight: "100vh",
      overflow: "hidden",
      position: "relative",
      width: "100vw",
    },
    sidebar: {
      "@media (min-width: 900px)": {
        display: "flex",
      },
      alignItems: "center",
      background:
        "radial-gradient(circle at 18% 18%, rgba(131, 201, 79, 0.34), transparent 28%), linear-gradient(145deg, #174F30 0%, #287E45 54%, #215E38 100%)",
      display: "none",
      justifyContent: "center",
      minHeight: "100vh",
      overflow: "hidden",
      padding: theme.spacing(8, 8, 8, 10),
      position: "relative",
    },
    sidebarPattern: {
      "&::before": {
        background: "linear-gradient(120deg, rgba(255, 255, 255, 0.1) 0 1px, transparent 1px 46px)",
        content: "''",
        inset: 0,
        opacity: 0.2,
        position: "absolute",
        transform: "skewX(-14deg)",
      },
      inset: 0,
      position: "absolute",
    },
  }),
  {
    name: "Layout",
  },
);
const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  const { errors } = useUser();
  const classes = useStyles(props);
  const { themeType } = useTheme();

  // show fullscreen loading when there is externalLoginError - we will redirect and
  // logout user in meantime
  if (errors.some(item => item === "externalLoginError")) {
    return <LoginLoading />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <div className={classes.sidebarPattern} />
        <div className={classes.brandContent}>
          <div className={classes.brandLogoContainer}>
            <SVG className={classes.brandLogo} src={exlynaturalLogoDark} />
          </div>
          <div className={classes.brandEyebrow}>Exlynatural Commerce</div>
          <h1 className={classes.brandHeading}>Manage natural wellness commerce with clarity.</h1>
          <p className={classes.brandCopy}>
            Review orders, products, customers, and daily operations from one focused workspace.
          </p>
        </div>
        <img className={classes.brandMark} src={exlynaturalMark} alt="" aria-hidden />
      </div>
      <div className={classes.mainPanel}>
        <div className={classes.mobileBrand}>
          <div>
            <SVG className={classes.mobileBrandLogo} src={exlynaturalLogoDark} />
            <div className={classes.mobileBrandCopy}>Manage natural wellness commerce.</div>
          </div>
          <img className={classes.mobileBrandMark} src={exlynaturalMark} alt="" aria-hidden />
        </div>
        <div className={classes.mainPanelContent}>
          <div className={classes.formPanel}>
            <div className={classes.logoContainer}>
              <SVG
                className={classes.logo}
                src={themeType === "dark" ? exlynaturalLogoDark : exlynaturalLogo}
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.displayName = "Layout";
export default Layout;
