import { Button, Layout } from "antd";
import styled, { css } from "styled-components";

const { Header } = Layout;

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
