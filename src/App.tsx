import React from "react";
import client from "./modules/GraphQL";
import { ApolloProvider } from "@apollo/client";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Components
import Index from "./pages";
import AppThemeProvider from "./theme";
import Navbar from "./components/base/Navbar";

function App() {
  return (
    <AppThemeProvider>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </AppThemeProvider>
  );
}

export default App;
