import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const INITIAL_FORM = {
  monday: [dayjs("07:00", "HH:mm"), dayjs("17:00", "HH:mm")],
  tuesday: [dayjs("07:00", "HH:mm"), dayjs("17:00", "HH:mm")],
  wednesday: [dayjs("07:00", "HH:mm"), dayjs("17:00", "HH:mm")],
  thursday: [dayjs("07:00", "HH:mm"), dayjs("17:00", "HH:mm")],
  friday: [dayjs("07:00", "HH:mm"), dayjs("17:00", "HH:mm")],
  saturday: [dayjs("07:00", "HH:mm"), dayjs("17:00", "HH:mm")],
  sunday: [dayjs("07:00", "HH:mm"), dayjs("17:00", "HH:mm")],
};
