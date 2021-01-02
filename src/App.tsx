// src\App.tsx

import { Switch, Route } from "react-router-dom";

import Home from "./pages/home.page";
import Project from "./pages/project.page";
import Bug from "./pages/bug.page";
import Layout from "./components/global-layout/layout.component";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/project" exact>
          {/* TODO: will be dynamic route eventually */}
          <Project />
        </Route>
        <Route path="/bug" exact>
          {/* TODO: will be dynamic route eventually */}
          <Bug />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
