import React from 'react';
import { darken } from 'polished';
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
  .ant-table-tbody > .ant-table-row:hover {
    & > td {
      /* background-color: ${(props) => props.theme.body.high} !important; */
      background-color: ${(props) =>
        darken(0.1, props.theme.body.high)} !important;

      -webkit-border-radius: 0 !important;
      -moz-border-radius: 0 !important;
      border-radius: 0 !important;
    }
  }
`;

export default Table;
