import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import PptMaker from "./service/ppt_maker";

const authservice = new AuthService(firebaseApp);
const pptmaker = new PptMaker();

ReactDOM.render(
  <React.StrictMode>
    <App authservice={authservice} pptmaker={pptmaker} />
  </React.StrictMode>,
  document.getElementById("root")
);
