import {
  DatePickerProps,
  FormItemProps,
  InputNumberProps,
  InputProps,
  SelectProps,
} from "antd";
import { Dayjs } from "dayjs";

// type Component
type TInput = {
  element: "input";
  fieldProps?: InputProps;
};

type TSelect = {
  element: "select";
  fieldProps?: SelectProps;
};

type TInputNumber = {
  element: "number";
  fieldProps?: InputNumberProps;
};

// Type schemaFilter
type ITypeString = (TSelect | TInput) & {
  type: "string";
  defaultValue?: string;
};

type ITypeNumber = (TSelect | TInputNumber) & {
  type: "number";
  defaultValue?: number;
};

type ITypeDate = {
  type: "date";
  defaultValue?: Dayjs;
  element: "date";
  fieldProps?: DatePickerProps;
  fromDateName?: string;
  toDateName?: string;
};

// type ITypeBoolean = {
//   type: "boolean";
//   defaultValue?: boolean;
//   element: "input";
// };

// type ITypeArray = {
//   type: "array";
//   defaultValue?: string[] | number[];
//   itemType?: string;
//   element?: string;
// };

type IType = ITypeString | ITypeNumber | ITypeDate;
// | ITypeBoolean | ITypeArray;

export type TFilterSchema = IType & {
  name: string;
  placeholder?: string;
  formItemProps?: FormItemProps;
  allowClear?: boolean;
};
