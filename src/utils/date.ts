import { FormInstance } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

export function formatDateToString(date: Dayjs, formatType = 'DD/MM/YYYY') {
  return dayjs(date).format(formatType);
}

// export function disableAfterToday(date) {
//   return date.valueOf() > dayjs().valueOf();
// }

export function checkDisableFrom(
  startDate: Dayjs,
  endDateName: string,
  form: FormInstance,
  disableAfterToday = true
) {
  if (disableAfterToday && startDate?.valueOf() > dayjs().valueOf()) {
    return true;
  }

  const endDate = form.getFieldValue(endDateName);
  if (!startDate || !endDate) {
    return false;
  }

  return startDate.valueOf() >= endDate.valueOf();
}

export function checkDisableTo(
  endDate: Dayjs,
  startDateName: string,
  form: FormInstance,
  disableAfterToday = true
) {
  if (disableAfterToday && endDate?.valueOf() > dayjs().valueOf()) {
    return true;
  }

  const startDate = form.getFieldValue(startDateName);
  if (!startDate || !endDate) {
    return false;
  }

  return endDate.valueOf() <= startDate.valueOf();
}

// export const numberDaysAgo = (number = 1) => dayjs().subtract(number, "day");

// export const numberDaysAfterDay = (date = dayjs(), number = 1) =>
//   date.add(number, "day");
