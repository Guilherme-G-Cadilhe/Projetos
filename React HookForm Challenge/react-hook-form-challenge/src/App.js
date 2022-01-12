import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Step1 } from "./pages/Step1";
import { Step2 } from "./pages/Step2";
import { Step3 } from "./pages/Step3";
import { Step4 } from "./pages/Step4";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          <Route path="/result" component={Step4} />
        </Switch>
      </Router>
    </>
  );
}

export default App;