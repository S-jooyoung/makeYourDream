import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/join/join";
function App({ authservice }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authservice={authservice} />}></Route>
          <Route path="join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
