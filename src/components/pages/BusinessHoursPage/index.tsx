import { ToggleButton } from "@/components/ToggleButton";
import { BUSSINESS_DAYS } from "@/const/general";
import { Button, Flex, Form, TimePicker, Typography } from "antd";
import {
  StyleContainerWeelDays,
  StyledCard,
  StyledContainerDays,
} from "./styles/businessHoursPageStyles";

import { INITIAL_FORM } from "./const/initialForm";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  createAndUpdateBusinessHour,
  getBusinessHourByIdUser,
} from "@/store/businessHourSlice/actions";
import { useEffect } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Title, Paragraph } = Typography;
const { RangePicker } = TimePicker;

export const BusinessHoursPage = () => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const dispatch = useAppDispatch();
  const { businessHours } = useAppSelector((state) => state.businessHour);

  const transformBusinessHours = (businessHours) => {
    return BUSSINESS_DAYS.reduce((acc, day) => {
      acc[day.id] = [
        dayjs(businessHours[day.id].startTime, "HH:mm"),
        dayjs(businessHours[day.id].endTime, "HH:mm"),
      ];
      acc[`${day.id}Status`] = businessHours[day.id].active;
      return acc;
    }, {});
  };

  const onFinish = (values) => {
    const data = BUSSINESS_DAYS.reduce((acc, day) => {
      acc[day.id] = {
        startTime: values[day.id][0].format("HH:mm"),
        endTime: values[day.id][1].format("HH:mm"),
        active: values[`${day.id}Status`],
      };
      return acc;
    }, {});

    dispatch(createAndUpdateBusinessHour(data));
  };

  useEffect(() => {
    if (businessHours) {
      const dataForm = transformBusinessHours(businessHours);
      form.setFieldsValue(dataForm);
    }
  }, [businessHours]);
  useEffect(() => {
    if (!businessHours) {
      dispatch(getBusinessHourByIdUser());
    }
  }, []);

  return (
    <StyledCard title={<Title level={2}>Horario Comercial</Title>}>
      <Title level={3}>Configura tus horarios</Title>
      <Paragraph>
        Selecciona los días de la semana en que tu tienda funcionará
      </Paragraph>
      <Form initialValues={INITIAL_FORM} onFinish={onFinish} form={form}>
        <StyledContainerDays gap={10}>
          {BUSSINESS_DAYS.map((day) => (
            <Form.Item name={`${day.id}Status`} key={day.id}>
              <ToggleButton
                onChange={(e) => form.setFieldValue(`${day.id}Status`, e)}
                key={day.id}
              >
                {day.prefix}
              </ToggleButton>
            </Form.Item>
          ))}
        </StyledContainerDays>
        <StyleContainerWeelDays vertical>
          {BUSSINESS_DAYS.map((day) => (
            <Flex key={day.id} justify="space-between" gap={50}>
              <Title level={5}>{day.name}</Title>
              <Form.Item
                rules={[
                  {
                    type: "array",
                    required: true,
                    message: "Por favor selecciona el rango de horas.",
                  },
                ]}
                name={day.id}
              >
                <RangePicker
                  disabled={values ? !values[`${day.id}Status`] : true}
                  format={"HH:mm"}
                />
              </Form.Item>
            </Flex>
          ))}
        </StyleContainerWeelDays>
        <Form.Item>
          <Button shape="round" type="primary" htmlType="submit">
            Guardar
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  );
};
