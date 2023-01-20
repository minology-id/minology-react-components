import React from 'react';
import styled from 'styled-components';
import { Input, Select as SelectAntd } from 'antd';

const { Search: SearchAntd } = Input;

const Search = ({ columns, ...props }) => {
  const Select = (
    <SelectAntd
      fieldNames={{ label: 'title', value: 'key' }}
      options={columns}
      defaultValue="Filter By"
    />
  );

  return <SearchStyled addonBefore={Select} {...props} />;
};

const SearchStyled = styled(SearchAntd)`
  .ant-input-wrapper > input,
  .ant-input-wrapper > span > button {
    background-color: ${(props) => props.theme.body.low};
  }
`;

export default Search;
