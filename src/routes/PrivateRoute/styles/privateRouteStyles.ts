import { Layout } from "antd";
import styled, { css } from "styled-components";

const { Content } = Layout;

export const StyledLayoutContainer = styled(Layout)`
  min-height: 100vh;
`;

export const StyledLayoutContainerContent = styled(Layout)`
  ${({ theme }) => css`
    background-color: ${theme.secondary[100]};
  `}
`;

export const StyledContentContainer = styled(Content)`
  ${({ theme }) => css`
    background-color: ${theme.secondary[200]};
    border-top-left-radius: 30px;
    padding: 24px;
  `}
`;
