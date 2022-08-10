import React from 'react';

const firstIndex = 0;

export const usePagination = (data) => {
  const [peoplesPerPage] = React.useState(5);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [tableData, setTableData] = React.useState(
    data.slice(firstIndex, peoplesPerPage)
  );

  React.useEffect(() => {
    setTableData(data.slice(0, peoplesPerPage));
  }, [peoplesPerPage, data]);

  const handleChange = (_, value) => {
    setCurrentPage(value);
    setTableData(
      data.slice(
        firstIndex + peoplesPerPage * (value - 1),
        peoplesPerPage * value
      )
    );
  };

  return [tableData, currentPage, handleChange, peoplesPerPage];
};
