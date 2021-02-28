import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <div className={styles.Left}>
            Lorem ipsum dolor sit amet.
          </div>
        </li>
        <li>
          <div className={styles.Left}>
            Lorem, ipsum dolor.
          </div>
        </li>
        <li style={{ alignSelf: 'flex-end' }}>
          <div className={styles.Right}>
            Lorem ipsum dolor sit.
        </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
