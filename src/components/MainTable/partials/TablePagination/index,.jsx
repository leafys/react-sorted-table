import { Pagination } from '@mui/material';
import React from 'react';
import styles from './TablePagination.module.scss';

const TablePagination = ({
  currentPage,
  handleChange,
  filteredPeoples,
  peoplesPerPage,
}) => {
  return (
    <Pagination
      className={styles.pagination}
      count={Math.ceil(filteredPeoples.length / peoplesPerPage)}
      page={currentPage}
      onChange={handleChange}
    />
  );
};

export default TablePagination;
