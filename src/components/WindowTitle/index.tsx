import { Helmet } from "react-helmet";

interface WindowTitleProps {
  title: string;
}

export const WindowTitle = ({ title }: WindowTitleProps) => {
  return !title ? null : <Helmet title={`${title} | Exlynatural`} />;
};
