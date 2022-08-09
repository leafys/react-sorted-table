import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import TableHead from './partials/TableHead';
import TableBody from './partials/TableBody';
import { useSortableTable } from 'hooks/useSortableFilteredTable';

const MainTable = ({ peoples }) => {
  const [searchValue, setSearchValue] = useState('');
  const [handleSortingChange, filteredPeoples] = useSortableTable(
    peoples,
    searchValue
  );

  return (
    <Table striped bordered hover>
      <TableHead {...{ handleSortingChange, searchValue, setSearchValue }} />

      <TableBody {...{ filteredPeoples }} />
    </Table>
  );
};

export default MainTable;
