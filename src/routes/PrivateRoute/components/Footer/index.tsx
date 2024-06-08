import { Layout } from "antd";
import { useTheme } from "styled-components";

const { Footer: FooterAntd } = Layout;

export const Footer = () => {
  const theme = useTheme();
  return (
    <FooterAntd style={{ backgroundColor: theme.secondary[200] }}>
      Food App @2024 Created by Anderson Cruz and Yicel Gutierrez
    </FooterAntd>
  );
};
