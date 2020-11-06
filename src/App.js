import { useState, useEffect } from 'react';
import styles from './css/App.module.css';
import Row from './container/Row';
import rowData from './utils/rowData';
import Banner from './component/Banner';
import Nav from './container/Nav';

const App = () => {
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    setRows(rowData);
  }, [])

  return (
    <div className={styles.Container}>
      <Nav />

      <main className={styles.Main__Container}>
        <Banner />

        <section className={styles.Rows}>
          {rows.map((row, index) => (
            <Row
              key={index}
              rowTitle={row.title}
              requestURL={row.requestURL}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
