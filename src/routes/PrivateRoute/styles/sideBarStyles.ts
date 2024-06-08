import { Flex, Layout } from "antd";
import styled, { css } from "styled-components";

const { Sider } = Layout;

export const StyledContainerSider = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.secondary[200]};
  `}
`;

export const StyledSider = styled(Sider)`
  ${({ theme }) => css`
    border-bottom-right-radius: 30px;
    height: 100%;
    background-color: ${theme.secondary[100]} !important;
  `}
`;

export const StyledContainerLogo = styled(Flex)`
  padding: 1rem;
`;
