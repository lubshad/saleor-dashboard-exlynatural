import exlynaturalLogoLightMode from "@assets/images/exlynatural-logo.svg";
import exlynaturalLogoDarkMode from "@assets/images/exlynatural-logo-dark.svg";
import { useTheme } from "@dashboard/theme";
import { type DefaultTheme } from "@saleor/macaw-ui-next";

const getExlynaturalLogoUrl = (theme: DefaultTheme) => {
  switch (theme) {
    case "defaultLight":
      return exlynaturalLogoLightMode;
    case "defaultDark":
      return exlynaturalLogoDarkMode;
    default:
      throw new Error("Invalid theme mode, should not happen.");
  }
};

export const ExlynaturalLogo = () => {
  const { theme } = useTheme();

  return <img src={getExlynaturalLogoUrl(theme)} alt="" />;
};
