import React from 'react';
import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { Table as AntdTable } from 'antd';

const Table = ({ ...props }) => {
  return (
    <TableWrapper>
      <TableStyled {...props} />
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  overflow: auto;
`;
const TableStyled = styled(AntdTable)`
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
