import { Card, Flex } from "antd";
import styled from "styled-components";
import calendar from "@/assets/calendar.png";

export const StyledContainerDays = styled(Flex)`
  margin-top: 20px;
`;

export const StyleContainerWeelDays = styled(Flex)`
  margin-top: 20px;

  width: 800px;
`;

export const StyledCard = styled(Card)`
  background-image: url(${calendar});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 700px;
`;
