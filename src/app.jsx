import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/join/join";
import Main from "./components/main/main";

function App({ authservice, pptmaker }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authservice={authservice} />} />
          <Route path="join" element={<Join authservice={authservice} />} />
          <Route
            path="main"
            element={<Main authservice={authservice} pptmaker={pptmaker} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
