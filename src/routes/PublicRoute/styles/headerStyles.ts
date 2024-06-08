import { Layout, Row } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
`;

export const StyledRow = styled(Row)`
  width: 100%;
  gap: 1rem;
`;
