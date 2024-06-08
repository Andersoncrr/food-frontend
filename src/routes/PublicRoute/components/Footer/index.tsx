import { Layout } from "antd";

const { Footer: FooterAntd } = Layout;

export const Footer = () => {
  return (
    <FooterAntd>
      Food App ©{new Date().getFullYear()} Created by Anderson and Yicel
    </FooterAntd>
  );
};
