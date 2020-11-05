import { useState, useEffect } from 'react';
import styles from './css/App.module.css';
import Row from './container/Row';
import rowData from './utils/rowData';

const App = () => {
  const [rows, setRows] = useState([]);

  const getRowDataFromUtils = () => {
    setRows(rowData);
  };

  useEffect(() => {
    getRowDataFromUtils();
  }, [])

  return (
    <div className={styles.Container}>
      <main>
        {rows.map((row, index) => (
          <Row
            key={index}
            rowTitle={row.title}
            requestURL={row.requestURL}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
