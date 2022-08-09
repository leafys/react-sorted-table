import { useEffect, useState } from 'react';

export const useSortableTable = (data, searchValue) => {
  const [tableData, setTableData] = useState([]);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;

        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'ru', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const filteredPeoples = tableData.filter((people) => {
    return people.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return [handleSortingChange, filteredPeoples];
};
