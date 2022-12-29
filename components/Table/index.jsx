import React from 'react';
import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { Table as AntdTable } from 'antd';

const Table = ({ ...props }) => {
  return <TableStyled {...props} />;
};

const TableStyled = styled(AntdTable)`
  .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-table
    > .ant-table-container
    > .ant-table-content {
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .ant-table-thead > tr > th {
    background-color: ${(props) => props.theme.body.high};
  }
  .ant-table-tbody > tr > td {
    background-color: ${(props) => props.theme.body.low};
  }
  .ant-pagination > .ant-pagination-item {
    background-color: ${(props) => props.theme.body.default};
  }
`;

export default Table;
