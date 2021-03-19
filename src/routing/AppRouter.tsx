import { BrowserRouter, Route } from "react-router-dom";

import { PATHS } from "./paths";
import App from "../components/App";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Route exact path={PATHS.MAIN} key="main" component={App} />
    </BrowserRouter>
  );
}