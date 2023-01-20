import React from 'react';
import styled from 'styled-components';
import { Space } from 'antd';

import Table from '@minology/components/Table';
import Button from '@minology/components/Button';
import ButtonLink from '@minology/components/ButtonLink';
import Search from '@minology/components/Datatable/Search';

const DataTable = ({ config, columns, rows, ...otherProps }) => {
  return (
    <>
      <Panel>
        <Space className="panel-search">
          {config.search ? <Search columns={columns} /> : null}
        </Space>
        <div style={{ flexGrow: 1 }}></div>
        <Space className="panel-action">
          {config.actions.map((item, key) => {
            if (item.to) {
              return (
                <ButtonLink
                  key={key}
                  to={item.to}
                  variant={item.variant}
                  badge={item.badgeCount}
                >
                  {item.title}
                </ButtonLink>
              );
            } else {
              return (
                <Button
                  key={key}
                  onClick={item.onClick}
                  variant={item.variant}
                  badge={item.badgeCount}
                >
                  {item.title}
                </Button>
              );
            }
          })}
        </Space>
      </Panel>
      <MobilePanel>
        <Space>
          {config.actions.map((item, key) => {
            if (item.to) {
              return (
                <ButtonLink
                  key={key}
                  to={item.to}
                  shape="circle"
                  variant={item.variant}
                  icon={item.icon}
                  badge={item.badgeCount}
                />
              );
            } else {
              return (
                <Button
                  key={key}
                  onClick={item.onClick}
                  shape="circle"
                  variant={item.variant}
                  icon={item.icon}
                  badge={item.badgeCount}
                />
              );
            }
          })}
        </Space>
      </MobilePanel>
      <Table
        rowKey="employeeId"
        columns={columns}
        dataSource={rows}
        {...otherProps}
      />
    </>
  );
};

DataTable.defaultProps = {
  config: {
    search: false,
    actions: [],
  },
  columns: [],
  rows: [],
};

const Panel = styled.div`
  display: flex;
  margin: 1rem 0;

  .panel-action {
    display: none;

    @media screen and (min-width: 990px) {
      display: inline-flex;
    }
  }
`;

const MobilePanel = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 1rem 0;

  @media screen and (min-width: 990px) {
    display: none;
  }
`;

export default DataTable;
