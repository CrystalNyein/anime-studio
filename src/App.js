import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import StartPage from "./components/StartPage";
import store from "./redux/store";
import DetailPage from "./components/DetailPage";

export const LoaderContext = React.createContext({
  isLoading: false,
  setIsLoading: () => {},
});
export const UserFormContext = React.createContext({
  openUserForm: false,
  setOpenUserForm: () => {},
});
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [openUserForm, setOpenUserForm] = useState(false);

  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Router>
          <Switch>
            <UserFormContext.Provider value={{ openUserForm, setOpenUserForm }}>
              <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/anime/:id" component={DetailPage} />
              </LoaderContext.Provider>
            </UserFormContext.Provider>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
