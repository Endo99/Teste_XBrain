import React from "react";
import Products from "../Products";
import { Container } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
    
    const theme = createMuiTheme({
        palette: {
          primary: blue,
          secondary: orange
        },
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container>
                    <Router>
                        <Route exact path="/" component={() => (<Products />)} />
                    </Router>
                </Container>
      </ThemeProvider>
        </div>
    )
}

export default App;