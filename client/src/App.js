import { Home, Detail, Landing, Create } from "./views/index.js";
import NavBar from "./Components/NavBar/NavBar"
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/countries" render={() => <Home />} />
      <Route path="/country/:id" render={() => <Detail />} />
      <Route path="/create" component={Create} />
    </div>
  );
}

export default App;
