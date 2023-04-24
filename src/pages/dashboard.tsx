import { BreadcrumbsWrapper } from '@/components';
import { Typography } from 'antd';
import React from 'react';

const Dashboard = () => {
  return (
    <BreadcrumbsWrapper
      breadcrumbs={[
        {
          title: 'Dashboard',
        },
      ]}
    >
      <Typography>Dashboard</Typography>
    </BreadcrumbsWrapper>
  );
};

export default Dashboard;
