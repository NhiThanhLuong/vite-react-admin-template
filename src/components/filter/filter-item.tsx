import {
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { Dayjs } from 'dayjs';
import { FC, ReactElement } from 'react';

import { TFilterSchema } from '@/ts/types/filter';
import { checkDisableFrom, checkDisableTo } from '@/utils';

type Props = Omit<TFilterSchema, 'type' | 'defaultValue'> & {
  form: FormInstance;
  children?: ReactElement;
  fromDateName?: string;
  toDateName?: string;
};

const FilterItem: FC<Props> = ({
  form,
  name,
  element,
  fieldProps,
  formItemProps,
  allowClear = true,
  placeholder,
  children,
  fromDateName,
  toDateName,
}) => {
  const newFieldProps = { ...fieldProps, allowClear } as any;

  let Component: any;
  switch (element) {
    case 'input':
      Component = Input;
      break;
    case 'number':
      Component = InputNumber;
      delete newFieldProps.allowClear; // because antd's warning
      break;
    case 'select':
      Component = Select;
      // newFieldProps.loading ??= false;
      // newFieldProps.mode = mode;
      // if (searchLocal) {
      //   newFieldProps.filterOption = filterOption;
      //   newFieldProps.showSearch = true;
      // }
      break;
    case 'date':
      Component = DatePicker;
      newFieldProps.format ??= 'DD/MM/YYYY HH:mm:ss';
      newFieldProps.showTime ??= true;
      if (fromDateName)
        newFieldProps.disabledDate = (value: Dayjs) =>
          checkDisableTo(value, fromDateName, form);
      if (toDateName)
        newFieldProps.disabledDate = (value: Dayjs) =>
          checkDisableFrom(value, toDateName, form);
      break;
    default:
      Component = Input;
      break;
  }

  return (
    <Form.Item className="mb-2" name={name} {...formItemProps}>
      <Component className="w-full" placeholder={placeholder} {...fieldProps}>
        {children}
      </Component>
    </Form.Item>
  );
};

export default FilterItem;
