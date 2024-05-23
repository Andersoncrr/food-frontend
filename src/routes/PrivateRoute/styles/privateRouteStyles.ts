import { Button, Flex, Layout } from "antd";
import styled, { css } from "styled-components";

const { Sider, Header, Content } = Layout;

export const StyledLayoutContainer = styled(Layout)`
  min-height: 100%;
`;

export const StyledContainerSider = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.secondary[200]};
  `}
`;

export const StyledContainerLogo = styled(Flex)`
  padding: 1rem;
`;

export const StyledSider = styled(Sider)`
  ${({ theme }) => css`
    border-bottom-right-radius: 30px;
    height: 100%;
    background-color: ${theme.secondary[100]} !important;
  `}
`;

export const StyledLayoutContainerContent = styled(Layout)`
  ${({ theme }) => css`
    background-color: ${theme.secondary[100]};
  `}
`;

export const StyledContainerHeader = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.secondary[200]};
  `}
`;

export const StyledHeader = styled(Header)`
  ${({ theme }) => css`
    padding: 0;
    border-bottom-right-radius: 30px;
    background-color: ${theme.secondary[100]};
  `}
`;

export const StyledButtonCollapsed = styled(Button)`
  ${({ theme }) => css`
    width: 64;
    height: 64;
    color: ${theme.primary[100]};
  `}
`;

export const StyledContentContainer = styled(Content)`
  ${({ theme }) => css`
    background-color: ${theme.secondary[200]};
    border-top-left-radius: 30px;
    padding: 24px;
  `}
`;
