import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

import TableHead from './partials/TableHead';
import TableBody from './partials/TableBody';
import TablePagination from './partials/TablePagination/index,';
import { useSortableFilteredTable } from 'hooks/useSortableFilteredTable';
import { usePagination } from 'hooks/usePagination';
import { useDebounceInput } from 'hooks/useDebounceInput';

const MainTable = ({ peoples }) => {
  const [searchValue, setSearchValue] = useState('');
  const debbouncedSearchValue = useDebounceInput(searchValue, 500);

  const [handleSortingChange, filteredPeoples] = useSortableFilteredTable(
    peoples,
    debbouncedSearchValue
  );

  const [tableData, currentPage, handleChange, peoplesPerPage] =
    usePagination(filteredPeoples);

  return (
    <>
      <Table striped bordered hover>
        <TableHead {...{ searchValue, setSearchValue, handleSortingChange }} />

        <TableBody {...{ tableData }} />
      </Table>

      <TablePagination
        {...{ currentPage, handleChange, filteredPeoples, peoplesPerPage }}
      />
    </>
  );
};

export default MainTable;

// костыль
// const filteredPeoples = (searchValue ? peoples : tableData).filter((people) => {
//   return people.name.toLowerCase().includes(searchValue.toLowerCase());
// });
