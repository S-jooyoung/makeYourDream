import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";

const authservice = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authservice={authservice} />
  </React.StrictMode>,
  document.getElementById("root")
);
