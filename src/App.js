import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from 'API/peoples.json';

import MainTable from 'components/MainTable';
import { TableDataContext } from 'Services/Context/TableContext';

function App() {
  const [peoples, setPeoples] = React.useState([]);

  React.useEffect(() => {
    setPeoples(data);
  }, []);

  const columns = [
    { label: 'Rank', accessor: 'rank', input: false },
    { label: 'Name', accessor: 'name', input: true },
    { label: 'Finish time', accessor: 'time', input: false },
    { label: 'Speed', accessor: 'speed', input: false },
  ];

  return (
    <div className="app">
      <h1>Table</h1>

      <TableDataContext.Provider value={columns}>
        <MainTable {...{ peoples }} />
      </TableDataContext.Provider>
    </div>
  );
}

export default App;
