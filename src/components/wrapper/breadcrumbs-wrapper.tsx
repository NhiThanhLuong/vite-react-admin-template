import { BreadcrumsType } from '@/ts/types';
import { Spin } from 'antd';
import React, { FC, ReactElement } from 'react';
import CustomBreadcrumb from '../custom/custom-breadcrumb';

type Props = {
  isLoading?: boolean;
  breadcrumbs?: BreadcrumsType[];
  children: ReactElement;
};

const BreadcrumbsWrapper: FC<Props> = ({
  isLoading = false,
  breadcrumbs,
  children,
}) => {
  return (
    <>
      <CustomBreadcrumb routes={breadcrumbs} />
      <Spin spinning={isLoading}>{children}</Spin>
    </>
  );
};

export default BreadcrumbsWrapper;
