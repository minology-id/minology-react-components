import React from 'react';
// import { Table } from 'antd';

import ContentTitle from '@minology/components/ContentTitle';
import Card from '@minology/components/Card';
import Table from '@minology/components/Table';

import { columns, rows } from './DS_TABLE';

const TablePage = () => {
  return (
    <div>
      <ContentTitle>Table Example</ContentTitle>
      <Card>
        <Table columns={columns} dataSource={rows} rowKey="id" />
      </Card>
    </div>
  );
};

export default TablePage;
