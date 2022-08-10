import React, { useEffect, useState } from 'react';

export const useSortableFilteredTable = (data, searchValue) => {
  const [peopleData, setPeopleData] = useState([]);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    setPeopleData(data);
  }, [data]);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...peopleData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;

        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'ru', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setPeopleData(sorted);
    }
  };

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const filteredPeoples = React.useMemo(() => {
    const trimSearchValue = searchValue.trim();

    if (trimSearchValue.length <= 2) return peopleData;

    return peopleData.filter((people) =>
      people.name.toLowerCase().includes(trimSearchValue.toLowerCase())
    );
  }, [searchValue, peopleData]);

  return [handleSortingChange, filteredPeoples];
};
