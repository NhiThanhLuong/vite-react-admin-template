import { TFilterSchema } from '@/ts/types/filter';
import { Col, Form, Row } from 'antd';
import React, { FC } from 'react';
import FilterCard from './filter-card';
import FilterItem from './filter-item';

type Props = {
  onChange: (_: any) => void;
  onReset: () => void;
  schemaList: Omit<TFilterSchema, 'type' | 'defaultValue'>[];
};

const colProps = {
  xxl: 4,
  lg: 8,
  md: 12,
  sm: 12,
  xs: 24,
};

const FilterWrapper: FC<Props> = ({ onChange, onReset, schemaList }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    onChange(values);
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <FilterCard onReset={onReset}>
        <Row gutter={[8, 8]}>
          {schemaList.map((item) => (
            <Col key={item.name} {...colProps}>
              <FilterItem {...item} form={form} />
            </Col>
          ))}
        </Row>
      </FilterCard>
    </Form>
  );
};

export default FilterWrapper;
