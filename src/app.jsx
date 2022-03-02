import Login from "./components/login/login";
import styles from "./app.module.css";
function App({ authservice }) {
  return (
    <div className={styles.app}>
      <Login authservice={authservice} />
    </div>
  );
}

export default App;
