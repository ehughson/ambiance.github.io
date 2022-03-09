import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes/routes';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Switch>
        {routes.map(({ path, Component }) => {
            return (
                <Route
                    exact
                    key={path}
                    path={path}
                >
                  <Component />
                </Route>
            );
        })}
      </Switch>
    </Router>
  </ChakraProvider>
)
