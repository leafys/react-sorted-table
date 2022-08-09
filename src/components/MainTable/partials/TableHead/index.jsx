import React from 'react';
import { TableDataContext } from 'Services/Context/TableContext';
import styles from './TableHead.module.scss';

const TableHead = ({ handleSortingChange, searchValue, setSearchValue }) => {
  const columns = React.useContext(TableDataContext);

  return (
    <thead className={styles.thead}>
      <tr>
        {columns.map(({ label, accessor, input }) => (
          <th key={accessor} onClick={() => handleSortingChange(accessor)}>
            <span>{label}</span>

            {input && (
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
